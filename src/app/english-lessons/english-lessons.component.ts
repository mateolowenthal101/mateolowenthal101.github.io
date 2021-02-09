import { Component, OnInit } from '@angular/core';
import { EnglishService } from '../english.service';

@Component({
  selector: 'app-english-lessons',
  templateUrl: './english-lessons.component.html',
  styleUrls: ['./english-lessons.component.css']
})
export class EnglishLessonsComponent implements OnInit {

  courses;
  
  constructor(private english_data: EnglishService) { }

  ngOnInit(): void {

    this.Getinfo()
    console.log(this.courses);
  

  }

  Getinfo() {
    this.english_data.getEnglishCourse().subscribe((data: []) => {
      this.courses = data; console.log(data)
    })

  }
  

}
