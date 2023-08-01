import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public profileData:any[]=[];
  public selectedItem:string=''
ngOnInit(): void {
  this.profileData.push({
    "id":1,
    "item":"My Profile"
  },
  {
    "id":1,
    "item":"Wishlist"
  },
  {
    "id":1,
    "item":"My Order"


  });
}
}
