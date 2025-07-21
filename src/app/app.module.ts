import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({ 
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoursesModule
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] 
})
export class AppModule { }
