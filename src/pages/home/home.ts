import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CouponPage } from './../coupon/coupon';
import { InfoPage } from './../info/info';
import { RecommendPage } from './../recommend/recommend';
import { AdvertPage } from './../advert/advert';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  movetocoupon(){
  this.navCtrl.push(CouponPage);
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


}
