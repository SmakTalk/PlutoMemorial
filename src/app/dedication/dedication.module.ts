import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DedicationRoutingModule } from './dedication-routing.module';
import { DedicationComponent } from './dedication.component';


@NgModule({
  declarations: [
    DedicationComponent
  ],
  imports: [
    CommonModule,
    DedicationRoutingModule
  ]
})
export class DedicationModule { }
