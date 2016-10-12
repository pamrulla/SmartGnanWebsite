<?php

require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_GET['id']))
{
	http_response_code(400);
}
else
{
	$courseLessons = CourseRepository::getCourseLessons($_GET['id']);
}
echo json_encode($courseLessons);
