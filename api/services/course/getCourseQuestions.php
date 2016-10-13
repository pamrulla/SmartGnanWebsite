<?php

require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

if(!isset($_GET['id']) || !isset($_GET['start']) || !isset($_GET['count']) || !isset($_GET['sort']) || !isset($_GET['mine']) || !isset($_GET['nores']) || !isset($_GET['uid']))
{
	http_response_code(400);	
	echo 'Invalid request';
}
else
{
	$courseQuestions = CourseRepository::getCourseQuestions($_GET['id'], $_GET['start'], $_GET['count'], $_GET['sort'], $_GET['mine'], $_GET['nores'], $_GET['uid']);
	echo json_encode($courseQuestions);
}
