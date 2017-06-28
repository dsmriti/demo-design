import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoupongeneratePage } from './coupongenerate';

@NgModule({
  declarations: [
    CoupongeneratePage,
  ],
  imports: [
    IonicPageModule.forChild(CoupongeneratePage),
  ],
  exports: [
    CoupongeneratePage
  ]
})
export class CoupongeneratePageModule {}
