<?php
require_once '../../DBClass.php';
require_once 'CourseDescription.php';

class CourseRepository{
    public static function getCourseDescription(){
        
        $db_courseDescription = DBClass::query('select desc_long from course where id = 1');
        if(count($db_courseDescription) == 1){
            $db_courseDescription = new CourseDescription($db_courseDescription[0]->desc_long);
                return $db_courseDescription;
        }
    }
}