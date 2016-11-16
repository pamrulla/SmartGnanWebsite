<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');

if(!isset($_GET['id']))
{
	echo json_encode(new CourseBasicDetails(null, false, 'Invalid Request'));
}
else{
	$uid = 0;
	if(isset($_GET['uid']))
		$uid = $_GET['uid'];
	$courseBasicDetails = CourseRepository::getBasicCourseDetails($_GET['id'], $uid);
	echo json_encode($courseBasicDetails);
}
