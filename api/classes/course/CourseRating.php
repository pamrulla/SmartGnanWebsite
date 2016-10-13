<?php

class CourseRating{
    public $feedback;
    public $authorImage;
    public $rating;
    public $date;
    
    public function __construct($f = '', $ai='', $r = 0, $d=''){
    	$this->feedback = $f;
    	$this->authorImage = $ai;
    	$this->rating = $r;
    	$this->date = $d;
    }
}