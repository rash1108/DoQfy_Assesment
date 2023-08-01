import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDatepickerModule
  ]
})
export class SharedModule { }
