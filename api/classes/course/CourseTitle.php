<?php

class Title{
    public $title;
    public $shortDescription;
    public $author;

    public function __construct($t = '', $sd = '', $a = ''){
    	$this->title = $t;
    	$this->shortDescription = $sd;
    	$this->author = $a;
    }
}