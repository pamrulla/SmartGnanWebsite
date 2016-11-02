"use strict";
var router_1 = require('@angular/router');
var course_lists_component_1 = require('./course-lists/course-lists.component');
var course_main_component_1 = require('./course-main.component');
var routes = [
    { path: 'course', component: course_lists_component_1.CourseListsComponent },
    { path: 'course/:id', component: course_main_component_1.CourseMainComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=course-routing.js.map