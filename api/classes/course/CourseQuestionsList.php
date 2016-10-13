<?php
class CourseQuestionsList{
	public $max;
	public $questions;

	public function __construct($m = 0, $r = array()){
		$this->max = $m;
		$this->questions = $r;
	}
}