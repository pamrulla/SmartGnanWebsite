<?php

class Lesson{
	public $Name;
    public $IsFree;
    public $Duration;
    public $VideoURL;
    public $IsCompleted;

    public function __construct($n = '', $isf = false, $d = '', $vurl = '', $isc = false){
    	$this->Name = $n;
    	$this->IsFree = $isf;
    	$this->Duration = $d;
    	$this->VideoURL = $vurl;
    	$this->IsCompleted = $isc;
    }
}

class Chapter{
	public $Name;
    public $IsEnabled;
    public $Progress;
    public $Duration;
    public $Lessons;

    public function __construct($n = '', $isE = false, $p = 0, $d = '', $l = array()){
    	$this->Name = $n;
    	$this->IsEnabled = $isE;
    	$this->Progress = $p;
    	$this->Duration = $d;
    	$this->Lessons = $l;
    }
}