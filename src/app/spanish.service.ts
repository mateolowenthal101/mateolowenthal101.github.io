import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpanishService {


  apiUrl = "http://localhost:3000/spanish";

  constructor(private http: HttpClient) { }



  getSpanishCourse(){

    let getSpanishUrl = this.apiUrl + "/getAll"
    var result = this.http.get(getSpanishUrl);
    console.log(result);
    return result;

  }

  addSpanishCourse(course) {

    return this.http.post(this.apiUrl, course)
     
  }

  
}
