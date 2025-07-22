import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CourseCardComponent, CourseImageComponent, CommonModule]
})
export class AppComponent implements OnInit {

    // the advantage of giving this observable variable to the template is that
    // the framework will take care of shutting it down when the component is destroyed
    // thereby avoiding memory leaks!!
    // courses$: Observable<Course[]>;

    // courses = COURSES;

    courses$: Observable<Course[]>;

    constructor(private courseService: CoursesService,
                @Inject(CONFIG_TOKEN) private config: AppConfig
    ) {
        // console.log(config);
    }

    ngOnInit() {
        this.courses$ = this.courseService.loadCourses();
    }

    save(course: Course) {
        this.courseService.saveCourse(course)
            .subscribe(
                () => console.log('course saved!!')
            );
    }
}
