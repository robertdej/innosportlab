import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../data/data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
	
	nextPage(){
  	this.navCtrl.push(Data);
  }


}
