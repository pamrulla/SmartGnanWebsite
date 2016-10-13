<?php

class CourseProgress{
	public $progress;
    public $isCompleted;

    public function __construct($p = 0, $ic = false){
    	$this->progress = $p;
    	$this->isCompleted = $ic;
    }
}