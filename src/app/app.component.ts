
import * as firebase from 'firebase';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Router } from '@angular/router';

// const config ={
//     apiKey: "AIzaSyCZUWnRZDZ4Z1PhOrIWBh5Ch1yBlEGFBZA",
//     authDomain: "analog-premise-143006.firebaseapp.com",
//     databaseURL: "https://analog-premise-143006.firebaseio.com",
//     projectId: "analog-premise-143006",
//     storageBucket: "analog-premise-143006.appspot.com",
//     messagingSenderId: "228617359068"
//   }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
public afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if(user){
          this.router.navigate(["/home"]);
        } else {
          this.router.navigate(["/login"]);
        }
      }, err => {
        this.router.navigate(["/login"]);
      }, () => {
        this.splashScreen.hide();
      })
this.statusBar.styleDefault();
    });
    //firebase.initializeApp(config);
  }
}
