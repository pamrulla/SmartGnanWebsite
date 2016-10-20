<?php
require_once '../../DBClass.php';
require_once 'CourseDescription.php';
require_once 'CourseHeaderOverview.php';
require_once 'CourseDownload.php';
require_once 'CourseLessons.php';
require_once 'CourseTitle.php';
require_once 'CourseProgress.php';
require_once 'CourseAuthor.php';
require_once 'CourseDetails.php';
require_once 'CourseRating.php';
require_once 'CourseRatingsList.php';
require_once 'CourseQuestions.php';
require_once 'CourseQuestionsList.php';
require_once 'QuestionAnswers.php';
require_once 'CourseList.php';

class CourseRepository{
    public static function getCourseDescription($id){
        
        $db_courseDescription = DBClass::query('select desc_long from course where id = '. $id);
        if(count($db_courseDescription) == 1){
            $db_courseDescription = new CourseDescription($db_courseDescription[0]->desc_long);
                return $db_courseDescription;
        }
    }

    public static function getHeaderOverview($id, $uid = 0){
    	
        $db_course_price = DBClass::query('select cou.id,cou.price,cou.discount,les.link from course cou, chapter cha, lesson les where cou.id=cha.course_id and cha.id=les.chapter_id and cha.order=1 and les.order=1 and cou.id=' . $id);
    	if(count($db_course_price) == 1){

    		//get course price and completion details
    		if($uid > 0){
            	$db_course_user = DBClass::query('select * from user_course where user_id = ' . $uid . ' and course_id = ' . $id);
            	if(count($db_course_user) == 1)
            	{
            		//user buys course-
            		$db_course_overview = new CourseHeaderOverview($db_course_price[0]->link, true, $db_course_user[0]->is_exam_enabled==1, 
            			$db_course_user[0]->is_course_completed == 1, $db_course_price[0]->price, $db_course_price[0]->discount);
            		return $db_course_overview;
            	}
            	else
            	{
            		//user did not buy course
            		return new CourseHeaderOverview($db_course_price[0]->link, false, false, false, $db_course_price[0]->price, $db_course_price[0]->discount);        
            	}
            }
            else
            {
            	return new CourseHeaderOverview($db_course_price[0]->link, false, false, false, $db_course_price[0]->price, $db_course_price[0]->discount);
            }
        }
        else
        {
        	return new CourseHeaderOverview();
        }
    }

    public static function getCourseDownload($id){
        $db_courseDownload = DBClass::query('select download_link from course where id = '. $id);
        if(count($db_courseDownload) == 1){
            $db_courseDownload = new CourseDownload($db_courseDownload[0]->download_link);
                return $db_courseDownload;
        }
        else{
            return new CourseDownload();
        }       
    }

    public static function getCourseLessons($id, $uid = 0){
        $chapters = array();
        $sql = '';
        if($uid == 0){
            $sql = 'select cha.id as chid, cha.name as chname, cha.duration as chduration, les.name as lsname, les.is_free as lsisfree, les.duration as lsduration, les.link as url from sgdb.chapter cha,sgdb.lesson les where cha.id=les.chapter_id and cha.course_id='.$id.' order by cha.order,les.order';
        }
        else{
            $sql = 'select cha.id as chid, cha.name as chname, cha.duration as chduration, les.name as lsname, les.is_free as lsisfree, les.duration as lsduration, les.link as url, ul.is_completed as iscompleted from sgdb.chapter cha,sgdb.lesson les,sgdb.user_lesson ul where cha.id=les.chapter_id and ul.lesson_id=les.id and cha.course_id='.$id.' and ul.user_id = '.$uid.' order by cha.order,les.order';
        }
        $db_chapters = DBClass::query($sql);

        $i = -1;
        $prg = 0;
        $ch = new Chapter();
        $lessons = array();
        foreach ($db_chapters as $db_ch) {
            if($i != $db_ch->chid){
                if($i != -1){
                    $ch->Progress = $prg / count($lessons);
                    $ch->Lessons = $lessons;
                    array_push($chapters, $ch);
                }
                $i = $db_ch->chid;
                $ch = new Chapter();
                
                $ch->Name = $db_ch->chname;
                $ch->IsEnabled = false;
                $ch->Duration = $db_ch->chduration;

                $lessons = array();
                $prg = 0;
            }
            $ls = new Lesson($db_ch->lsname, $db_ch->lsisfree, $db_ch->lsduration, $db_ch->url, false);
            if($uid != 0){
                $prg = $prg + $db_ch->iscompleted;
            }
            else{
                $prg = 0;
            }
            array_push($lessons, $ls);
        }

        if(count($lessons) > 0){
            $ch->Progress = $prg / count($lessons);
        }
        else{
            $ch->Progress = 100;
        }
        $ch->Lessons = $lessons;
        array_push($chapters, $ch);

        return $chapters;       
    }

    public static function getHeaderTitle($id){
        $db_courseTitle = DBClass::query('select cou.title, cou.desc_short, us.fname, us.lname from course cou, user us where cou.user_id=us.id and cou.id='.$id);
        if(count($db_courseTitle) == 1){
            return new Title($db_courseTitle[0]->title, $db_courseTitle[0]->desc_short, $db_courseTitle[0]->fname . ' ' . $db_courseTitle[0]->lname);
        }
        return new Title();
    }

    public static function getHeaderCourseProgress($id, $uid){
        $db_progress = DBClass::query('select avg(is_completed) as progress from user_lesson where user_id = ' . $uid . ' and lesson_id in ( select id from lesson where chapter_id in ( select id from chapter where course_id = '. $id . '))');
        if(count($db_progress) == 1){
            if($db_progress[0]->progress < 100){
                return new CourseProgress($db_progress[0]->progress);
            }
            else{
                return new CourseProgress($db_progress[0]->progress, true);
            }                
        }
        else{
            return new CourseProgress();
        }

    }

    public static function getSidebarCourseAuthor($id){
        $db_courseAuthor = DBClass::query('select u.fname, u.lname, u.dp, up.experience_years as years, up.experience_details as details from user u, user_profile up  where u.id in ( select user_id from course where id = '. $id .') and up.user_id = u.id');
        if(count($db_courseAuthor) == 1){
            return new CourseAuthor($db_courseAuthor[0]->fname . ' ' . $db_courseAuthor[0]->lname,
                $db_courseAuthor[0]->dp,
                'Having ' . $db_courseAuthor[0]->years .' years of experience in ' . $db_courseAuthor[0]->details);
        }
        else{
            return new CourseAuthor();
        }
    }

    public static function getSidebarCourseDetails($id){
        $db_courseDetails = DBClass::query('select cou.level, cou.release_date, cou.duration, avg(r.rating) as rating from course cou, reviews r where cou.id = ' . $id . ' and r.course_id = ' . $id);
        if(count($db_courseDetails) == 1){
            $db_students = DBClass::query('select count(*) as students from user_course where course_id = ' . $id);
            if(count($db_students) == 1){
                return new CourseDetails($db_courseDetails[0]->level, $db_courseDetails[0]->rating, $db_courseDetails[0]->duration, $db_courseDetails[0]->release_date, $db_students[0]->students);    
            }
            else{
                return new CourseDetails($db_courseDetails[0]->level, $db_courseDetails[0]->rating, $db_courseDetails[0]->duration, $db_courseDetails[0]->release_date);
            }
            
        }
        else{
            return new CourseDetails();
        }
    }

    public static function getCourseReviews($id, $start, $count){
        $reviews = array();

        $db_reviews = DBClass::query('select r.rating, r.review, r.date, u.dp from reviews r, user u where r.is_approved = 1 and r.course_id = ' . $id .' and u.id = r.user_id');

        for($i = $start-1; $i < count($db_reviews) && $i < ($start+$count-1); $i++){
            $rt = new CourseRating($db_reviews[$i]->review, $db_reviews[$i]->dp, $db_reviews[$i]->rating, $db_reviews[$i]->date);
            array_push($reviews, $rt);
        }
        
        return new CourseRatingsList(count($db_reviews), $reviews);
    }

    public static function getCourseQuestions($id, $start, $count, $sort = 0, $mine = 0, $nores = 0, $uid){
        $questions = array();

        if($sort == 0){
            if($mine == 0 && $nores == 0){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id order by qn.date desc');
            }
            else if($mine == 1 && $nores == 0){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.user_id = '.$uid.' order by qn.date desc');
            }
            else if($mine == 0 && $nores == 1){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.answers = 0 order by qn.date desc');
            }
            else{
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.user_id = '.$uid.' and qn.answers = 0 order by qn.date desc');
            }
        }
        else{

            if($mine == 0 && $nores == 0){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id order by qn.answers desc');
            }
            else if($mine == 1 && $nores == 0){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.user_id = '.$uid.' order by qn.answers desc');
            }
            else if($mine == 0 && $nores == 1){
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.answers = 0 order by qn.answers desc');
            }
            else{
                $db_questions = DBClass::query('select qn.id, qn.title, qn.description, qn.answers, qn.date, us.dp FROM sgdb.question qn, sgdb.user us where course_id = '.$id.' and qn.is_approved = 1 and us.id = qn.user_id and qn.user_id = '.$uid.' and qn.answers = 0 order by qn.answers desc');
            }
            
        }
        for($i = $start-1; $i < count($db_questions) && $i < ($start+$count-1); $i++){
            $qn = new QuestionInfo($db_questions[$i]->title,$db_questions[$i]->description,$db_questions[$i]->dp,$db_questions[$i]->answers,$db_questions[$i]->id,$db_questions[$i]->date);
            array_push($questions, $qn);
        }
        
        return new CourseQuestionsList(count($db_questions), $questions);
    }

    public static function getQuestionAnswers($id){
        $answers = array();

        $db_answers = DBClass::query('select us.fname, us.lname, us.dp, an.answer, an.date FROM sgdb.answer an, sgdb.user us where an.question_id = '.$id.' and an.is_approved = 1 and an.user_id = us.id order by an.date');
        foreach ($db_answers as $db_an) {
            $an = new QuestionAnswers($db_an->fname . ' ' . $db_an->lname, $db_an->dp, $db_an->answer, $db_an->date);
            array_push($answers, $an);
        }
        return $answers;
    }

    public static function getCourseList($type){
        $courses = array();
        $sql = 'select cr.id, cr.title, cr.desc_short, cr.release_date, us.fname, us.lname, cr.duration, cr.price, cr.discount, cr.level FROM course cr, user us WHERE cr.user_id = us.id';
        if($type == 1){
            $sql = $sql . " and cr.level = 'Beginner'";
        }
        else if($type == 2){
            $sql = $sql . " and cr.level = 'Intermediate'";
        }
        else if($type == 3){
            $sql = $sql . " and cr.level = 'Advanced'";
        }
        $sql = $sql . " order by cr.release_date desc";
        $db_courses = DBClass::query($sql);
        foreach ($db_courses as $db_an) {
            $db_rating = DBClass::query('select avg(rv.rating) as rating from reviews rv where rv.course_id = '.$db_an->id);
            $db_students = DBClass::query('select count(*) as students from user_course uc where uc.course_id = '.$db_an->id);
            $an = new CourseList($db_an->id, $db_an->title, $db_an->desc_short, $db_an->release_date, $db_rating[0]->rating,
                $db_students[0]->students, $db_an->fname . ' ' . $db_an->lname, $db_an->duration, $db_an->price, $db_an->discount, $db_an->level);
            array_push($courses, $an);
        }
        
        return $courses;
    }
}