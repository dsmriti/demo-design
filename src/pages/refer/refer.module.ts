import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferPage } from './refer';

@NgModule({
  declarations: [
    ReferPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferPage),
  ],
  exports: [
    ReferPage
  ]
})
export class ReferPageModule {}
