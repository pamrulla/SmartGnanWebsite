<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_GET['id']) || !isset($_GET['start']) || !isset($_GET['count']))
{
	http_response_code(400);
	echo 'Invalid request';
}
else{
	$courseReviews = CourseRepository::getCourseReviews($_GET['id'], $_GET['start'], $_GET['count']);
	echo json_encode($courseReviews);
}

