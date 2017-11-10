import { Component } from '@angular/core';
import { Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;// = HomePage;
  alert: any;

  constructor(public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private scrOr: ScreenOrientation,
    public storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      scrOr.lock(this.scrOr.ORIENTATIONS.PORTRAIT);

      platform.registerBackButtonAction(() => {
        if (this.alert) {
          this.alert.dismiss();
          this.alert = null;
        } else {
          this.showAlert();
        }
      });
    });

    //Set the root page
    this.storage.get('hidehomepage').then((name) => {
      if(name == true){
        this.rootPage = TabsPage;
      }else{
        this.rootPage=HomePage;
      }
    });
  }

  /**
   * Notify of exiting the application
   */
  showAlert() {
    let alert0 = this.alertCtrl.create({
      title: 'Exit?',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert0.present();
  }

  /**
   * Show toast to press again
   */
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Press Again to exit',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}
