<?php

class CourseHeaderOverview{
    public $link;
    public $isUserLoggedIn;
    public $isBought;
    public $isExamEnabled;
    public $isCompleted;
    public $courseActualPrice;
    public $courseDiscount;
    public $chId;
    public $lsId;

    public function __construct($l = '', $b = false, $e = false, $c = false, $cap = 0, $cd = 0, $cid = 0, $lid = 0){
    	$this->link = $l;
        $this->isUserLoggedIn = true;
    	$this->isBought = $b;
    	$this->isExamEnabled = $e;
    	$this->isCompleted = $c;
    	$this->courseActualPrice = $cap;
    	$this->courseDiscount = $cd;
        $this->chId = $cid;
        $this->lsId = $lid;
    }
}