import { Component, OnInit } from '@angular/core';
import { SpanishService } from '../spanish.service';

@Component({
  selector: 'app-spanish-lessons',
  templateUrl: './spanish-lessons.component.html',
  styleUrls: ['./spanish-lessons.component.css']
})
export class SpanishLessonsComponent implements OnInit {


  courses;
  
  constructor(private spanish_data: SpanishService) { }

  ngOnInit(): void {

    this.Getinfo()
    console.log(this.courses);
  

  }

  Getinfo() {
    this.spanish_data.getSpanishCourse().subscribe((data: []) => {
      this.courses = data; console.log(data)
    })

  }
 


}
