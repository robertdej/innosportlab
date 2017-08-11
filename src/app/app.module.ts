import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RankingPage } from '../pages/ranking/ranking';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Friends } from '../pages/friends/friends';
import { Data } from '../pages/data/data';
import { Login } from '../pages/login/login';
import { Tutorial } from '../pages/tutorial/tutorial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RankingPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Friends,
    Data,
    Login,
    Tutorial
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RankingPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Friends,
    Data,
    Login,
    Tutorial
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
