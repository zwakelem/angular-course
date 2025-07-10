import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required: true})
  course: Course;

  @Output('onCourseSelected')
  onCourseEmitted = new EventEmitter<Course>();

  viewCourse() {
    console.log("course clicked ... ");
    this.onCourseEmitted.emit(this.course);
  }

}
