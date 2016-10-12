<?php
require_once '../../classes/course/CourseRepository.php';

header('Content-type: application/json');
//echo ")]}'\n'";

$courseDescription = CourseRepository::getCourseDescription();

echo json_encode($courseDescription);
