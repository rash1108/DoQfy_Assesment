import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit{

  public userName:string='';
  public todaysDate :string='';

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.userName="Rashmi Prasad";
    this.getDatetime();
  }
  getDatetime(){
    
     this.todaysDate = new Date().toDateString();
    
  }
}
