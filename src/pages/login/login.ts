import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tutorial } from '../tutorial/tutorial';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  	nextPage(){
  	this.navCtrl.push(Tutorial);
  }

}
