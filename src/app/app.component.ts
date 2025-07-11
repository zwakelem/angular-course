import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    @ViewChild(CourseCardComponent)
    card: CourseCardComponent;

    @ViewChild('divContainer')
    container: ElementRef;

    @ViewChildren(CourseCardComponent)
    cards: QueryList<CourseCardComponent>;

    // courses: Course[] = [];
    // courses: Course[] = COURSES;
    courses: Course[] = [...COURSES];

    startDate = new Date(2000, 0, 1);
    price = 9.36521;

    constructor() {
        // this will be undefined
        console.log("constructor => " + this.container);
    }

    ngAfterViewInit(): void {
        console.log(this.container);
        console.log(this.cards);
    }

    courseSelected(course: Course) {
        console.log(' .... onCardClicked');
        console.log(course.description);
        console.log(this.card);
        console.log(this.container);
    }

}
