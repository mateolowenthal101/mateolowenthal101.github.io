import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.css']
})
export class GeneralReportComponent implements OnInit {


  @Input() general_english;
  @Input() general_spanish;
  @Input() general_mathematics;


  public barChartOptions: ChartOptions = {
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
  public barChartLabels: Label[] = ['Week 1', 'Week2', 'Week3', 'Week 4', "Final Week"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];

  constructor() { }

  ngOnInit() {

    this.barChartData = [
      { data: this.general_english, label: 'English' },
      { data: this.general_spanish, label: 'Spanish' },
      { data: this.general_mathematics, label: 'Mathematics' }
    ];
      

  }



}
