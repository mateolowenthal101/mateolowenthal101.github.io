import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports;
  
  constructor(private reportService: ReportService) { }


  ngOnInit(): void {

    this.Getinfo()
    console.log(this.reports);
  

  }

  Getinfo() {
    this.reportService.getReport().subscribe((data: []) => {
      this.reports = data; 
      console.log(data)
    })

  }

}
