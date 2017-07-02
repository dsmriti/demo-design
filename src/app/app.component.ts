import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { NotificationPage } from '../pages/notification/notification';
import { ReferPage } from '../pages/refer/refer';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { OfferPage } from '../pages/offer/offer';
import { FeedbackPage } from '../pages/feedback/feedback';
import { CoupondtlPage } from '../pages/coupondtl/coupondtl';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },

      { title: 'Login', component: LoginPage },
      { title: 'Account', component: AccountPage },
      { title: 'Notification', component: NotificationPage },
      { title: 'Offer & Promotion', component: OfferPage },
      { title: 'Refer & Earn', component: ReferPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Help & Support', component: HelpPage },
      { title: 'Rate Our App', component: FeedbackPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.nav.setRoot(LoginPage);
  }
}
