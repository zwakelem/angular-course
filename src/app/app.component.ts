import { Component} from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    coreCourse = COURSES[0];
    rxjsCourse = COURSES[1];
    ngrxCourse = COURSES[2];

    courseSelected(course: Course) {
        console.log(' .... onCardClicked');
        console.log(course.description);
    }

}
