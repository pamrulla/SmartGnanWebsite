<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_GET['type']))
{
	http_response_code(400);	
	echo 'Invalid request';
}
else
{
 	$courses = CourseRepository::getCourseList($_GET['type']);
	echo json_encode($courses);
}

