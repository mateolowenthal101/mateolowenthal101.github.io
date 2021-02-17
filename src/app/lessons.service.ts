import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons;

  constructor() { }

  getLessons(){
    return this.lessons;
  }

  setLessons(data){
    this.lessons = data;
  }

}
