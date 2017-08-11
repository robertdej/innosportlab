import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Friends } from '../friends/friends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nextPage(){
  	this.navCtrl.push(Friends);
  }

}
