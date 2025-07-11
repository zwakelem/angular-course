import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { Course } from '../model/course';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass, NgStyle, UpperCasePipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required: true})
  course: Course;

  @Input()
  index: number;

  @Output('onCourseSelected')
  onCourseEmitted = new EventEmitter<Course>();

  viewCourse() {
    console.log("course clicked ... ");
    this.onCourseEmitted.emit(this.course);
  }

  cardClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER'
    };
  }

  cardStyles() {
    return {'text-decoration': 'underline'};
  }

}
