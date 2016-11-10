<?php
require_once '../../classes/user/UserRepository.php';
require_once '../../classes/user/UserRegistration.php';

header('Content-type: application/json');
//echo ")]}'\n'";
$post_data = json_decode(file_get_contents('php://input'), true);
if(!isset($post_data['email']) || !isset($post_data['password']))
{
	
	echo json_encode(new UserRegistration(false, 'Invalid Request'));
}
else{
	$userRegistered = UserRepository::postUserRegistration($post_data['email'], $post_data['password']);
	echo json_encode($userRegistered);
}