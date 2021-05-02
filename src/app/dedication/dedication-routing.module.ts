import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DedicationComponent } from './dedication.component';


const routes: Routes = [{ path: '', component: DedicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DedicationRoutingModule { }
