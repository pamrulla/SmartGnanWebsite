<?php

class CourseRatingsList{
	public $max;
	public $reviews;

	public function __construct($m = 0, $r = array()){
		$this->max = $m;
		$this->reviews = $r;
	}
}