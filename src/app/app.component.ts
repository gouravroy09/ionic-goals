import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config ={
    apiKey: "AIzaSyCZUWnRZDZ4Z1PhOrIWBh5Ch1yBlEGFBZA",
    authDomain: "analog-premise-143006.firebaseapp.com",
    databaseURL: "https://analog-premise-143006.firebaseio.com",
    projectId: "analog-premise-143006",
    storageBucket: "analog-premise-143006.appspot.com",
    messagingSenderId: "228617359068"
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
