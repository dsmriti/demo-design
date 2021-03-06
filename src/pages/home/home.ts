import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoupongeneratePage } from './../coupongenerate/coupongenerate';
import { InfoPage } from './../info/info';
import { RecommendPage } from './../recommend/recommend';
import { AdvertPage } from './../advert/advert';
import { OfferPage } from './../offer/offer';
import { FeedbackPage } from './../feedback/feedback';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  movetocoupongen(){
  this.navCtrl.push(CoupongeneratePage);
  }
  movetoinfo(){
  this.navCtrl.push(InfoPage);
  }
  movetorecommend(){
  this.navCtrl.push(RecommendPage);
  }
  movetoadvert(){
  this.navCtrl.push(AdvertPage);
  }
  movetooffer(){
  this.navCtrl.push(OfferPage);
  }
  movetofeedback(){
  this.navCtrl.push(FeedbackPage);
  }


}
