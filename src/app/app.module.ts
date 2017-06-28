import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CouponPage } from '../pages/coupon/coupon';
import { InfoPage } from '../pages/info/info';
import { RecommendPage } from '../pages/recommend/recommend';
import { AdvertPage } from '../pages/advert/advert';
import { CoupongeneratePage } from '../pages/coupongenerate/coupongenerate';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CouponPage,
    InfoPage,
    RecommendPage,
    AdvertPage,
    CoupongeneratePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CouponPage,
    InfoPage,
    RecommendPage,
    AdvertPage,
    CoupongeneratePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
