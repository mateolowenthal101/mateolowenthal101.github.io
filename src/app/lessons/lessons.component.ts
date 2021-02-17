import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from "../lessons.service";


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  

  lessons_obj;

  constructor(
    private _Activatedroute:ActivatedRoute,
    private lessons_service: LessonsService

    ) { 
    
    
  }

  ngOnInit(): void {
    
    this.lessons_obj = this.lessons_service.getLessons();
    console.log("got the lessons bitch", this.lessons_obj);


  }
}
  
  

  

