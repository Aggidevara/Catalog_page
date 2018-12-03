import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesDetails } from '../coursedetail.modal';
@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
  url = 'http://localhost:3020/courses';
  constructor( private http: HttpClient) { }

  getCourseDetails() {
    return this.http.get(this.url);
  }
}
