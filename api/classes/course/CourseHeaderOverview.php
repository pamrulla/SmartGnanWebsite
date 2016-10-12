<?php

class CourseHeaderOverview{
    public $link;
    public $isBought;
    public $isExamEnabled;
    public $isCompleted;
    public $courseActualPrice;
    public $courseDiscount;

    public function __construct($l = '', $b = false, $e = false, $c = false, $cap = 0, $cd = 0){
    	$this->link = $l;
    	$this->isBought = $b;
    	$this->isExamEnabled = $e;
    	$this->isCompleted = $c;
    	$this->courseActualPrice = $cap;
    	$this->courseDiscount = $cd;
    }
}