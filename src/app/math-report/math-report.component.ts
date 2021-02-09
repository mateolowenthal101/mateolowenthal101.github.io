import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-math-report',
  templateUrl: './math-report.component.html',
  styleUrls: ['./math-report.component.css']
})
export class MathReportComponent implements OnInit {

  @Input() mathematics_report;

  public lineChartData: ChartDataSets[];
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
      { data: this.mathematics_report, label: 'Mathematics' },
    ];
  }

}
