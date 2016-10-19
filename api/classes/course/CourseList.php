<?php

class CourseList{
    public $id;
    public $title;
    public $shortDesc;
    public $releaseDate;
    public $rating;
    public $students;
    public $author;
    public $duration;
    public $price;
    public $discount;
    public $level;
    public $finalPrice;

    public function __construct($i=0, $t='', $sd='', $rd='', $r=0, $st=0, $a='', $d='', $p=0, $dis=0, $l = "Beginner"){
        $this->id = $i;
        $this->title = $t;
        $this->shortDesc = $sd;
        $this->releaseDate = $rd;
        $this->rating = $r;
        $this->students = $st;
        $this->author = $a;
        $this->duration = $d;
        $this->price = $p;
        $this->discount = $dis;
        $this->level = $l;
        $this->finalPrice = $p * ( 100 - $dis) / 100;
    }
}