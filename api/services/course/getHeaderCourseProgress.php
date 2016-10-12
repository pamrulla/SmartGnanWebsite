<?php

/*SELECT avg(is_completed) FROM sgdb.user_lesson where 
lesson_id in (select id from sgdb.lesson where chapter_id in( select id from sgdb.chapter where course_id in(select id from sgdb.course where id=1)));*/
