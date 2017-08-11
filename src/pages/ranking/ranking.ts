import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Friends } from '../friends/friends';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html'
})
export class RankingPage {

  constructor(public navCtrl: NavController) {

  }	
	nextPage(){
  	this.navCtrl.push(Friends);
  }


}
