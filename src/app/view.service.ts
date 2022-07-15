import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewCourseComponent } from './view-course/view-course.component';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }
  viewGalery=(course:any)=>{
    return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourses",course)
  }
}
