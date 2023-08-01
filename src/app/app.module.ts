import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimitiveComponent } from './primitive/primitive.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { PendingActionComponent } from './dashboard-layout/pending-action/pending-action.component';
import { OrderDetailsComponent } from './dashboard-layout/order-details/order-details.component';
import { WalletBalanceComponent } from './dashboard-layout/wallet-balance/wallet-balance.component';
import { FrequentlyUsedComponent } from './dashboard-layout/frequently-used/frequently-used.component';
import { ESignStampCountComponent } from './dashboard-layout/e-sign-stamp-count/e-sign-stamp-count.component';
import {DoughnutChartComponent} from './dashboard-layout/doughnut-chart/doughnut-chart.component';
import { AllBranchesComponent } from './dashboard-layout/all-branches/all-branches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// // import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';

// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrimitiveComponent,
    DashboardLayoutComponent,
    PendingActionComponent,
    OrderDetailsComponent,
    WalletBalanceComponent,
    FrequentlyUsedComponent,
    ESignStampCountComponent,
    DoughnutChartComponent,
    AllBranchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgbAlertModule,
    NgbDatepickerModule,
    JsonPipe
    
    // MatDatepickerModule,
    // MatInputModule,
    // MatFormFieldModule,
    // FormsModule,
    // ReactiveFormsModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
