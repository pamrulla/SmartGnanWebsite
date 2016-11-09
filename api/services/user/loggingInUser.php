<?php
require_once '../../classes/user/UserRepository.php';
require_once '../../classes/user/UserDetails.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_POST['email']) || !isset($_POST['password']))
{
	http_response_code(400);
	echo 'Invalid request';
}
else{
	$userDetails = UserRepository::loggingInUser($_POST['email'], $_POST['password']);
	if($userDetails->isSuccess){
		http_response_code(200);
	}
	else{
		http_response_code(400);
	}

	echo json_encode($userDetails);
}