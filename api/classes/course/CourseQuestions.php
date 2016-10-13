<?php
class QuestionInfo{
    public $title;
    public $shortDescription;
    public $authorImage;
    public $responses;
    public $id;
    public $date;

    public function __construct($t = '', $sd = '', $ai='', $res=0, $i=0, $dt=''){
    	$this->title = $t;
    	$this->shortDescription = $sd;
    	$this->authorImage = $ai;
    	$this->responses = $res;
    	$this->id = $i;
    	$this->date = $dt;
    }
}