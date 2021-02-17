import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LessonsService } from "../lessons.service";
import * as spanishLessons  from "../../assets/db/spanish.json";

@Component({
  selector: 'app-spanish-lessons',
  templateUrl: './spanish-lessons.component.html',
  styleUrls: ['./spanish-lessons.component.css']
})
export class SpanishLessonsComponent implements OnInit {


  courses = spanishLessons.default;
  
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private lesson_service: LessonsService

  ) { }

  ngOnInit(): void {


  }


  loadLessons(lessons){
    this.lesson_service.setLessons(lessons);
    this.router.navigate(['/lessons']);
  }


 


}
