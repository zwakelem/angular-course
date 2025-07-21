import {
    Attribute,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { Course } from '../../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false
})
export class CourseCardComponent implements OnInit, OnDestroy {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(@Attribute('type') private type: string) {
        // Attribute is used to improve performance when input called type 
        // is not expected to change, its stops Angular framework from 
        // continuosly checking its value
        console.log(type);
    }

    ngOnInit() {}

    ngOnDestroy(): void {
        console.log('Destroy ...');
    }

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }


}
