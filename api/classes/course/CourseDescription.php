<?php

class CourseDescription{
    public $courseFullDescription;

    public function __construct($cfd = ''){
        $this->courseFullDescription = $cfd;
    }
}