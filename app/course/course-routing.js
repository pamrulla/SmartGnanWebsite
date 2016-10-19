"use strict";
var router_1 = require('@angular/router');
var course_list_component_1 = require('./courselistcomponent/course-list.component');
var course_main_component_1 = require('./course-main.component');
var routes = [
    { path: 'course', component: course_list_component_1.CourseListComponent },
    { path: 'course/:id', component: course_main_component_1.CourseMainComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=course-routing.js.map