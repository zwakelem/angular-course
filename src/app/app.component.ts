import { Component, computed, effect, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {


    counter = signal(10);

    multiplier: number = 0;

    // this will be strictly readOnly
    derivedCounter = computed(() => {
        const counter = this.counter();
        return counter * 10;
    });

    /*derivedCounter = computed(() => {
        console.log(' +++ compute +++');
        // this implementation has a bug
        if(this.multiplier >= 10) {
            const counter = this.counter();
            return counter * 10;
        } else {
            return 0;
        }
    });*/

    course = signal({
        id: 1,
        title: 'Angular for Beginners'
    });

    courses = signal([
        'Angular for Beginners',
        'Reactive Angular'
    ]);

    constructor() {
        // when signals inside the effect change, the effect() will be called
        // changing values not allowed in effect()
        effect(() => {
            const counterValue = this.counter();
            const derivedCounterValue = this.derivedCounter();

            // note that compute() is called first, and then effect()
            // also, effect() is called once, even though it encompasses 2 signal values!!

            console.log(`counter: ${counterValue} derivedCounter: ${derivedCounterValue}`);
        });
    }

    incrementMultiplier() {
        this.multiplier++;
    }

    increment() {
        // below two lines do exactly the same thing
        this.counter.update(val => val + 1 );
        // this.counter.set(this.counter() + 1);

        // this is a proper way to update a signal that wraps an object
        this.course.set({
            id: 1,
            title: 'Hello World' // change title to 'Hello World'
        });

        // this is a proper way to update a signal that wraps an array
        this.courses.update(courses => [...courses, 'Angular Core Deep Dive']);
    }

}
