import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
    courseTitle:" ",
    courseDescription:"",
    courseDate:"",
    courseVenue:"",
    courseDuration:""
  }
  data:any=[];
    
  constructor(private view:ViewService) {
    view.viewGalery(this.course).subscribe(
      (r)=>(this.data=r)
    )
   }

  ngOnInit(): void {
  }
  Addcourse(){
    this.view.viewGalery(this.Addcourse).subscribe((data)=>{

    })
    console.log(this.course)
    alert("success")   
  }


}
