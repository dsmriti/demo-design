import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouponPage } from './../coupon/coupon';

/**
 * Generated class for the CoupongeneratePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coupongenerate',
  templateUrl: 'coupongenerate.html',
})
export class CoupongeneratePage {

  loadershow:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoupongeneratePage');
  }

  getcoupon(){
    this.loadershow=true;

let _this=this;
    setTimeout(function(){
      _this.navCtrl.setRoot(CouponPage);
    }, 3000);


  }

}
