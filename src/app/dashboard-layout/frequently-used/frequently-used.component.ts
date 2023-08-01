import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequently-used',
  templateUrl: './frequently-used.component.html',
  styleUrls: ['./frequently-used.component.css']
})
export class FrequentlyUsedComponent implements OnInit{

  public freqUsedResults:any[]=[];
  constructor(){};
  ngOnInit(): void {
    this.frequentlyUsedItems();
  }

  frequentlyUsedItems(){
    this.freqUsedResults.push({
      "text": "View Funds",  
      "freq": 20,  
    },
    {
      "text": "Manage Users",  
      "freq": 18,  
    },
    {
      "text": "View Orders",  
      "freq": 22,  
    },

    );

  }

}
