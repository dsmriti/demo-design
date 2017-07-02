import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoupondtlPage } from './coupondtl';

@NgModule({
  declarations: [
    CoupondtlPage,
  ],
  imports: [
    IonicPageModule.forChild(CoupondtlPage),
  ],
  exports: [
    CoupondtlPage
  ]
})
export class CoupondtlPageModule {}
