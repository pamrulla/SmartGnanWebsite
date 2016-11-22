<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";
$post_data = json_decode(file_get_contents('php://input'), false);

$values_are = explode ("&", file_get_contents('php://input'));

$lsId_are = explode ("=", $values_are[0]);
$uId_are = explode ("=", $values_are[1]);
//print_r($lsId_are);
//print_r($uId_are);
if($lsId_are[0] != 'id' || $uId_are[0] != 'uid' ){// !isset($lsId_are['lsId']) || !isset($post_data['uid'])){	
	echo json_encode("{isSuccess: false}");
}
else{
	echo json_encode(CourseRepository::updateCourseCompletion($lsId_are[1], $uId_are[1]));
}
