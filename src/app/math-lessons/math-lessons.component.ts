import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LessonsService } from "../lessons.service";
import * as mathematicsLessons  from "../../assets/db/mathematics.json";

@Component({
  selector: 'app-math-lessons',
  templateUrl: './math-lessons.component.html',
  styleUrls: ['./math-lessons.component.css']
})
export class MathLessonsComponent implements OnInit {


  courses = mathematicsLessons.default;
  
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
