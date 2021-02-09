import { Component, OnInit } from '@angular/core';
import { MathematicsService } from '../mathematics.service';

@Component({
  selector: 'app-math-lessons',
  templateUrl: './math-lessons.component.html',
  styleUrls: ['./math-lessons.component.css']
})
export class MathLessonsComponent implements OnInit {


  courses;
  
  constructor(private math_data: MathematicsService) { }

  ngOnInit(): void {

    this.Getinfo()
    console.log(this.courses);
  

  }

  Getinfo() {
    this.math_data.getMathCourse().subscribe((data: []) => {
      this.courses = data; console.log(data)
    })

  }
}
