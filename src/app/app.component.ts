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

    // courses: Course[] = [];
    // courses: Course[] = COURSES;
    courses: Course[] = [...COURSES];

    courseSelected(course: Course) {
        console.log(' .... onCardClicked');
        console.log(course.description);
    }

}
