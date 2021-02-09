import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnglishService {

  apiUrl = "http://localhost:3000/english";

  constructor(private http: HttpClient) { }


  getEnglishCourse(){

    let getEnglishUrl = this.apiUrl + "/getAll"
    var result = this.http.get(getEnglishUrl);
    console.log(result);
    return result;

  }

  addEnglishCourse(course) {

    return this.http.post(this.apiUrl, course)
     
  }

  

}
