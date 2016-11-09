<?php
require_once '../../classes/user/UserRepository.php';
require_once '../../classes/user/UserRegistration.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
//echo ")]}'\n'";

if(!isset($_POST['email']) || !isset($_POST['password']))
{
	http_response_code(200);
	json_encode(new UserRegistration(false, 'Invalid Request'));
}
else{
	$userRegistered = UserRepository::postUserRegistration($_POST['email'], $_POST['password']);
	if($userRegistered->isSuccess){
		http_response_code(200);
	}
	else{
		http_response_code(200);
	}

	echo json_encode($userRegistered);
}