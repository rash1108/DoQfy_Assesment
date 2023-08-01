import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  public orderResults:any[]=[];
  constructor(){

  }
  ngOnInit(): void {
    this.getOrderDetails();

  }
  getOrderDetails(){
    this.orderResults.push({ 
      "id": 1,  
      "value": 18,  
      "incrementDecrementVal": +2.5,
      "incDec": "I"
     
    },
    { 
      "id": 2,  
      "value": 10,  
      "incrementDecrementVal": +2.4,
      "incDec": "I"
     
    },
    { 
      "id": 3,  
      "value": 5,  
      "incrementDecrementVal": +2.5,
      "incDec": "I"
     
    },
    { 
      "id": 4,  
      "value": 3,  
      "incrementDecrementVal": +2.4,
      "incDec": "D"
     
    },
      )

  }
}
