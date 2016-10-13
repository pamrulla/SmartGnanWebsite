<?php

class CourseDetails{
    public $Level;
    public $Rating;
    public $Duration;
    public $Released;
    public $Students;

    public function __construct($l = 'Beginner', $r = 3, $d = '', $re='', $s=0){
    	$this->Level = $l;
    	$this->Rating = $r;
    	$this->Duration = $d;
    	$this->Released = $re;
    	$this->Students = $s;
    }
}