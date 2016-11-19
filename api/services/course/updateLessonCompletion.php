<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";
$post_data = json_decode(file_get_contents('php://input'), true);
echo file_get_contents('php://input');
$values_are = explode ("=", file_get_contents('php://input'));
print_r($values_are);  

if(!isset($post_data['lsId']) || !isset($post_data['uid'])){	
	echo json_encode(json_decode(file_get_contents('php://input')));
}
else{
	echo json_encode(CourseRepository::updateLessonCompletion($post_data['lsId'], $post_data['uid']));
}
