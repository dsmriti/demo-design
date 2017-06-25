import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertPage } from './advert';

@NgModule({
  declarations: [
    AdvertPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertPage),
  ],
  exports: [
    AdvertPage
  ]
})
export class AdvertPageModule {}
