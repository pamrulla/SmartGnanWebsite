<?php

class QuestionAnswers{
	public $name;
    public $authorImage;
    public $description;
    public $date;

    public function __construct($n = '', $ai='', $d='', $dt=''){
    	$this->name = $n;
    	$this->authorImage = $ai;
    	$this->description = $d;
    	$this->date = $dt;
    }
}