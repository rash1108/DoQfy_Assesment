import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-sign-stamp-count',
  templateUrl: './e-sign-stamp-count.component.html',
  styleUrls: ['./e-sign-stamp-count.component.css']
})
export class ESignStampCountComponent implements OnInit{

public e_count_names:any[]=[];

ngOnInit(): void {
  this.getE_Count();
}

getE_Count(){
  this.e_count_names.push({
    "eCountName":"E Sign Count"
  },
  {
    "eCountName":"E Stamp Count"
  },
  );
}
}
