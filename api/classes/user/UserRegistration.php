<?php

class UserRegistration{
    public $isSuccess;
    public $errorMessage;
    public $uid;

    public function __construct($an = false, $ai = '', $asd = 0){
        $this->isSuccess = $an;
        $this->errorMessage = $ai;
        $this->uid = $asd;
    }
}