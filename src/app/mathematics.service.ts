import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MathematicsService {


  apiUrl = "http://localhost:3000/mathematics";

  constructor(private http: HttpClient) { }



  getMathCourse(){

    let getMathUrl = this.apiUrl + "/getAll"
    var result = this.http.get(getMathUrl);
    console.log(result);
    return result;

  }

  addMathCourse(course) {

    return this.http.post(this.apiUrl, course)
     
  }



}
