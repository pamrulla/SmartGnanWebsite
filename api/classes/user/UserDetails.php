<?php

class UserDetails{
	public $isSuccess;
	public $errorMessage;
    public $id;
    public $fname;
    public $lname;
    public $email;
    public $dp;
    public $addr1;
    public $addr2;
    public $addr3;
    public $role;
    public $joined_date;

    public function __construct($db, $iss=false, $em=''){
    	if($db != null){
	    	$this->id = $db[0]->id;
			$this->fname = $db[0]->fname;
			$this->lname = $db[0]->lname;
			$this->email = $db[0]->email;
			$this->dp = $db[0]->dp;
			$this->addr1 = $db[0]->addr1;
			$this->addr2 = $db[0]->addr2;
			$this->addr3 = $db[0]->addr3;
			$this->role = $db[0]->role;
			$this->joined_date = $db[0]->joined_date;
		}
		$this->isSuccess = $iss;
		$this->errorMessage = $em;
    }
}