import { Component, OnInit } from '@angular/core';
import * as report from "../../assets/db/reports.json";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports = report.default;
  
  constructor() { }


  ngOnInit(): void {


  }

  
}
