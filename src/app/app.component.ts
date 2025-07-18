import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {

    // the advantage of giving this observable variable to the template is that 
    // the framework will take care of shutting it down when the component is destroyed
    // thereby avoiding memory leaks!!
    courses$: Observable<Course[]>;

    constructor(private courseService: CoursesService) {}

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
