import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})

export class WalletBalanceComponent implements OnInit {
  
  public walletBalalnce:number=0;
  ngOnInit(): void {
    this.getWalletBalance();
  }


  getWalletBalance(){
    this.walletBalalnce=250000;
  }
}
