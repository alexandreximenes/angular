import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h1>{{ courses.length }} {{ title }}</h1> 
    <ul>
        <li *ngFor="let course of courses">
            {{ course | uppercase }}
        </li>
    </ul>`
})
export class CourseComponent{
    
    title: string = "List of Courses"
    courses;

    constructor(service : CoursesService){
        this.courses = service.courses;
    }

} 