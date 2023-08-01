import { Component, OnInit, Inject } from '@angular/core';
import Chart, { ChartItem } from 'chart.js/auto';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit{
  public chart: any;
  constructor(@Inject(DOCUMENT) private document:any){
   
  }

  ngOnInit(): void {
    this.createChart();
    
  }
  //var grapharea = document.getElementById("myChart");
  createChart(){
    console.log('chart created');
   
    const graphs = document.getElementsByClassName('myChart') || [];

    for (let index=0; index<graphs.length; index++) {
      const graph = graphs.item(index) as ChartItem;
      this.chart = new Chart(graph, {
        type: 'doughnut',
  
        data: {
          datasets: [{
      label: 'My First Dataset',
      data: [300, 240, 100, 432],
      backgroundColor: [
        '#6f0bc1',
        '#ad7bd5',
        '#dbc4ee',
        '#dee4ed',
            
      ],
      hoverOffset: 4
    }],
        },
        options: {
          aspectRatio:2.5
        }
  
      });
    }
  }
 
  
 
}
