<?php

class CourseInfo{
	public $Id;
    public $title;
	public $desc_short;
	public $desc_long;
	public $level;
	public $release_date;
	public $price;
	public $discount;
	public $dowload_link;
	public $duration;
	public $exam_link;
	public $uid;
	public $rating;
	public $students;

	public function __construct($id=0, $tt='', $ds = '', $dl = '', $lvl = '', $rd = '', $pr = '', $dis = 0, $dwl = '', $dr = '', $el = '', $uidd = 0){
    	$this->Id = $id;
		$this->title = $tt;
		$this->desc_short = $ds;
		$this->desc_long = $dl;
		$this->level = $lvl;
		$this->release_date = $rd;
		$this->price = $pr;
		$this->discount = $dis;
		$this->dowload_link = $dwl;
		$this->duration = $dr;
		$this->exam_link = $el;
		$this->uid = $uidd;
    }
}

class Lesson1{
	public $Id;
	public $Name;
    public $IsFree;
    public $Duration;
    public $VideoURL;
    public $Type;
    public $is_completed;

    public function __construct($id=0, $fn='', $if = false, $d = '', $vu = '', $t = 1, $ic = false){
    	$this->Id = $id;
		$this->Name = $fn;
		$this->IsFree = $if == 1 ? true : false;
		$this->Duration = $d;
		$this->VideoURL = $vu;
		$this->Type = $t;
		$this->is_completed = $ic;
    }
}

class Chapter1{
	public $Id;
	public $Name;
    public $Duration;
    public $Progress;
    public $Lessons = array();

    public function __construct($id=0, $fn='', $d = '', $prg = 0, $ls = array()){
    	$this->Id = $id;
		$this->Name = $fn;
		$this->Duration = $d;
		$this->Progress = $prg;
		$this->Lessons = $ls;
    }
}

class Author{
	public $Id;
	public $fName;
	public $lName;
    public $dp;
    public $experience_years;
	public $experience_details;

	public function __construct($id=0, $fn='', $ln = '', $d = '', $ey = 0, $ed = ''){
    	$this->Id = $id;
		$this->fName = $fn;
		$this->lName = $ln;
		$this->dp = $d;
		$this->experience_years = $ey;
		$this->experience_details = $ed;
    }
}

class User_Specific{
	public $is_Bought;
	public $is_exam_enabled;
	public $is_course_completed;
	public function __construct($isb = false, $iee=false, $icc=false){
		$this->is_Bought = $isb;
    	$this->is_exam_enabled = $iee;
		$this->is_course_completed = $icc;
    }

}

class CourseBasicDetails{
	public $isSuccess;
	public $errorMessage;
    public $courseInfo;
    public $author;
    public $user_specific;
    public $chapters = array();
    
	public function __construct($iss=false, $em='', $cInfo = null, $ath = null, $us = null, $chps = null){
    	$this->isSuccess = $iss;
		$this->errorMessage = $em;
		$this->courseInfo = $cInfo;
		$this->chapters = $chps;
		$this->author = $ath;
		$this->user_specific = $us;		
    }
}