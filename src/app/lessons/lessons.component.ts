import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService  } from '../lessons.service';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  

  lessons_obj;

  constructor(
    private _Activatedroute:ActivatedRoute,
    private lessons_data: LessonsService 

    ) { 
    
    
  }

  ngOnInit(): void {
    
    let course_id = this._Activatedroute.snapshot.paramMap.get("course");
    let course_name = this._Activatedroute.snapshot.paramMap.get("topic");

    if(course_name == "english"){
      
      
      this.lessons_data.getLessonsEnglish(course_id).subscribe((data: []) => {
        this.lessons_obj = data; 
        console.log("here",data);
      })

    }


    if(course_name == "spanish"){
      
      
      this.lessons_data.getLessonsSpanish(course_id).subscribe((data: []) => {
        this.lessons_obj = data; 
        console.log("here",data);
      })

    }


    if(course_name == "mathematics"){
      
      
      this.lessons_data.getLessonsMath(course_id).subscribe((data: []) => {
        this.lessons_obj = data; 
        console.log("here",data);
      })

    }



  }
}
  
  

  

