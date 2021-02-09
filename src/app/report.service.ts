import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportService {


  
  apiUrl = "http://localhost:3000/report";


  constructor(private http: HttpClient) { }



  getReport(){
    let latest_report_url = this.apiUrl + "/latestReport";
    var result = this.http.get(latest_report_url);
    console.log(result);
    return result;
  }

}