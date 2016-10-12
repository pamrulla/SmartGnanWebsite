<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_GET['id']) || !isset($_GET['uid']))
{
	http_response_code(400);
}
else
{
	$courseOverview = CourseRepository::getHeaderOverview($_GET['id'], $_GET['uid']);
}
echo json_encode($courseOverview);
