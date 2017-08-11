import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { App  } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public app:App, public navCtrl: NavController) {

  }
  	nextPage(){
	this.app.getRootNav().setRoot(Login);
  }

}
