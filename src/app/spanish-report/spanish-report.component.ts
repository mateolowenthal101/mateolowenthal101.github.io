import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-spanish-report',
  templateUrl: './spanish-report.component.html',
  styleUrls: ['./spanish-report.component.css']
})
export class SpanishReportComponent implements OnInit {

  @Input() spanish_report;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: 100
          }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.lineChartData = [
      { data: this.spanish_report, label: 'Spanish' },
    ];
  }

}
