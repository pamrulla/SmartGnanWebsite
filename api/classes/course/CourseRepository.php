<?php
require_once '../../DBClass.php';
require_once 'CourseDescription.php';
require_once 'CourseHeaderOverview.php';
require_once 'CourseDownload.php';
require_once 'CourseLessons.php';
require_once 'CourseTitle.php';

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

    		//get course price and completoion details
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

    public static function getCourseLessons($id){
        //select * from sgdb.chapter cha,sgdb.lesson les where cha.id=les.chapter_id and cha.course_id=1 order by cha.order,les.order;
        
        //select * from sgdb.chapter cha,sgdb.lesson les,sgdb.user_lesson ul where cha.id=les.chapter_id and ul.lesson_id=les.id and cha.course_id=1 order by cha.order,les.order;

        $chapters = array();

        $db_chapters = DBClass::query('select * from chapter where course_id = '. $id .' order by chapter.order');
        foreach ($db_chapters as $db_ch) {
            $ch = new Chapter();
            $ch->Name = $db_ch->name;
            $ch->Duration = $db_ch->duration;

            $lessons = array();

            $db_lessons = DBClass::query('select * from lesson where chapter_id = '. $db_ch->id . ' order by lesson.order');
            
            foreach ($db_lessons as $db_ls) {
                $ls = new Lesson($db_ls->name, $db_ls->is_free, $db_ls->duration, $db_ls->link, false);

                array_push($lessons, $ls);
            }
            $ch->Lessons = $lessons;
            array_push($chapters, $ch);
        }
        return $chapters;       
    }

    public static function getHeaderTitle($id){
        //select cou.title,cou.desc_short,concat(us.fname,' ',us.lname) as name from sgdb.course cou,sgdb.user us where cou.user_id=us.id and cou.id=1;
        $db_courseTitle = DBClass::query('select title, desc_short, user_id from course where id = '. $id);
        if(count($db_courseTitle) == 1){
            $courseTitle = new Title($db_courseTitle[0]->title, $db_courseTitle[0]->desc_short);
            $db_author = DBClass::query('select fname, lname from user where id = '. $db_courseTitle[0]->user_id);
            if(count($db_author) == 1){
                $courseTitle->author = $db_author[0]->fname . ' ' . $db_author[0]->lname;
            }
                return $courseTitle;
        }
        return new Title();
    }

}