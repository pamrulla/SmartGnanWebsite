<?php

class Lesson{
	public $Name;
    public $IsFree;
    public $Duration;
    public $VideoURL;
    public $IsCompleted;
    public $Id;

    public function __construct($n = '', $isf = false, $d = '', $vurl = '', $isc = false, $i=1){
    	$this->Name = $n;
    	$this->IsFree = $isf;
    	$this->Duration = $d;
    	$this->VideoURL = $vurl;
    	$this->IsCompleted = $isc;
        $this->Id = $i;
    }
}

class Chapter{
	public $Name;
    public $IsEnabled;
    public $Progress;
    public $Duration;
    public $Id;
    public $Lessons;
    

    public function __construct($n = '', $isE = false, $p = 0, $d = '', $l = array(), $i=1){
    	$this->Name = $n;
    	$this->IsEnabled = $isE;
    	$this->Progress = $p;
    	$this->Duration = $d;
    	$this->Lessons = $l;
        $this->Id = $i;
    }
}