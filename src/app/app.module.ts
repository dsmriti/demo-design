import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CouponPage } from '../pages/coupon/coupon';
import { InfoPage } from '../pages/info/info';
import { RecommendPage } from '../pages/recommend/recommend';
import { AdvertPage } from '../pages/advert/advert';
import { CoupongeneratePage } from '../pages/coupongenerate/coupongenerate';
import { OfferPage } from '../pages/offer/offer';
import { FeedbackPage } from '../pages/feedback/feedback';
import { AccountPage } from '../pages/account/account';
import { NotificationPage } from '../pages/notification/notification';
import { ReferPage } from '../pages/refer/refer';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { CoupondtlPage } from '../pages/coupondtl/coupondtl';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CouponPage,
    InfoPage,
    RecommendPage,
    AdvertPage,
    CoupongeneratePage,
    OfferPage,
    FeedbackPage,
    AccountPage,
    NotificationPage,
    ReferPage,
    SettingsPage,
    HelpPage,
    CoupondtlPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CouponPage,
    InfoPage,
    RecommendPage,
    AdvertPage,
    CoupongeneratePage,
    OfferPage,
    FeedbackPage,
    AccountPage,
    NotificationPage,
    ReferPage,
    SettingsPage,
    HelpPage,
    CoupondtlPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
