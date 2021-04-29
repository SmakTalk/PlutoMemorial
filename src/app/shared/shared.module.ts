import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatToolbarModule
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
