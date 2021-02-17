import { Component, OnInit } from '@angular/core';
import * as englishLessons  from "../../assets/db/english.json";
import { Router, ActivatedRoute } from '@angular/router';
import { LessonsService } from "../lessons.service";

@Component({
  selector: 'app-english-lessons',
  templateUrl: './english-lessons.component.html',
  styleUrls: ['./english-lessons.component.css']
})
export class EnglishLessonsComponent implements OnInit {

  courses = englishLessons.default;
  
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
