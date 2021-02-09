import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { 
    
  }

  getLessonsEnglish(id){

    let getEnglishUrl = this.apiUrl + "english/getLessons/" + id
    var result = this.http.get(getEnglishUrl);
    return result;

  }

  getLessonsMath(id){

    let getMathUrl = this.apiUrl + "mathematics/getLessons/" + id
    var result = this.http.get(getMathUrl);
    return result;

  }


  getLessonsSpanish(id){

    let getSpanishUrl = this.apiUrl + "spanish/getLessons/" + id
    var result = this.http.get(getSpanishUrl);
    return result;

  }

}
