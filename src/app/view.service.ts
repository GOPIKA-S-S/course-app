import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http:HttpClient) { }
  viewGalery=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
