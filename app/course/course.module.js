"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var angular2_materialize_1 = require('angular2-materialize');
var forms_1 = require('@angular/forms');
var ratingstar_module_1 = require('../shared/ratingsstars/ratingstar.module');
var course_content_module_1 = require('../shared/course-content/course-content.module');
var course_main_component_1 = require('./course-main.component');
var course_progressbar_component_1 = require('./courseheadercomponent/courseprogressbarcomponent/course-progressbar.component');
var course_overview_header_component_1 = require('./courseheadercomponent/courseoverviewheadercomponent/course-overview-header.component');
var course_header_info_component_1 = require('./courseheadercomponent/courseheaderinfocomponent/course-header-info.component');
var course_header_component_1 = require('./courseheadercomponent/course-header.component');
var course_sidebar_details_component_1 = require('./coursesidebarcomponent/coursesidebardetailscomponent/course-sidebar-details.component');
var course_sidebar_author_component_1 = require('./coursesidebarcomponent/coursesidebarauthorcomponent/course-sidebar-author.component');
var course_main_section_component_1 = require('./coursemainsectioncomponent/course-main-section.component');
var course_download_component_1 = require('./coursemainsectioncomponent/coursedownloadcomponent/course-download.component');
var course_description_component_1 = require('./coursemainsectioncomponent/coursedescriptioncomponent/course-description.component');
var course_qna_component_1 = require('./coursemainsectioncomponent/courseqnacomponent/course-qna.component');
var course_qna_form_component_1 = require('./coursemainsectioncomponent/courseqnacomponent/courseqnaformcomponent/course-qna-form.component');
var course_qna_render_component_1 = require('./coursemainsectioncomponent/courseqnacomponent/courseqnarendercomponent/course-qna-render.component');
var course_single_qna_component_1 = require('./coursemainsectioncomponent/courseqnacomponent/coursesingleqnacomponent/course-single-qna.component');
var course_feedback_component_1 = require('./coursefeedbackcomponent/course-feedback.component');
var course_feedback_form_component_1 = require('./coursefeedbackcomponent/coursefeedbackformcomponent/course-feedback-form.component');
var course_feedback_render_component_1 = require('./coursefeedbackcomponent/coursefeedbackrendercomponent/course-feedback-render.component');
var course_lists_component_1 = require('./course-lists/course-lists.component');
var course_list_module_1 = require('../shared/course-list/course-list.module');
var course_service_1 = require('./services/course.service');
var header_module_1 = require('../shared/header/header.module');
var footer_module_1 = require('../shared/footer/footer.module');
var course_routing_1 = require('./course-routing');
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                ratingstar_module_1.RatingsStartModule,
                course_content_module_1.CourseContentModule,
                angular2_materialize_1.MaterializeModule,
                course_list_module_1.CourseListModule,
                header_module_1.HeaderModule,
                footer_module_1.FooterModule,
                course_routing_1.routing
            ],
            exports: [],
            declarations: [
                course_main_component_1.CourseMainComponent,
                course_header_component_1.CourseHeaderComponent,
                course_progressbar_component_1.CourseProgressbarComponent,
                course_overview_header_component_1.CourseOverviewHeaderComponent,
                course_header_info_component_1.CourseHeaderInfoComponent,
                course_sidebar_details_component_1.CourseSidebarDetailsComponent,
                course_sidebar_author_component_1.CourseSidebarAuthorComponent,
                course_main_section_component_1.CourseMainSectionComponent,
                course_download_component_1.CourseDownloadComponent,
                course_description_component_1.CourseDescriptionComponent,
                course_lists_component_1.CourseListsComponent,
                course_qna_component_1.CourseQnAComponent,
                course_qna_form_component_1.CourseQnAFormComponent,
                course_qna_render_component_1.CourseQnARenderComponent,
                course_single_qna_component_1.CourseSingleQnAComponent,
                course_feedback_component_1.CourseFeedbackComponent,
                course_feedback_form_component_1.CourseFeedbackFormComponent,
                course_feedback_render_component_1.CourseFeedbackRenderComponent
            ],
            providers: [course_service_1.CourseService],
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map