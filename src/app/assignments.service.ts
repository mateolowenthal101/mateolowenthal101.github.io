import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  apiUrl = "http://localhost:3000/assignment";

  constructor(private http: HttpClient) { }


  getAssignments(){

    let getAssignmentUrl = this.apiUrl + "/getAssignments"
    var result = this.http.get(getAssignmentUrl);
    console.log(result);
    return result;

  }

  addAssignment(course) {

    return this.http.post(this.apiUrl, course)
     
  }
}
