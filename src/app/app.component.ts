import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { CounterService } from './services/counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    constructor(private counterService :CounterService) {}

    increment() {
        this.counterService.increment();
        this.counterService.counter;
    }

}
