import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { ArBookPage } from '../arbook/arbook';
import { SpBookPage } from '../spbook/spbook';
import { FrBookPage } from '../frbook/frbook';
import { DeBookPage } from '../debook/debook';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  englishPage: any;
  enOverviewPage: any;
  arabicPage: any;
  spanishPage: any;
  frenchPage: any;
  germanPage: any;
  hideHomePage: boolean = false;
  coverspath: String[] = [
    "assets/images/covers/decover.jpg",
    "assets/images/covers/encover.jpg"]

  /**
   * 
   * @param navCtrl Constructor
   */
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
    this.arabicPage = ArBookPage;
    this.spanishPage = SpBookPage;
    this.frenchPage = FrBookPage;
    this.germanPage = DeBookPage;
    this.enOverviewPage = TabsPage;
  }

  /**
   * Here we hold if we will be able to see this screen again
   */
  updateHideHomePage() {
    console.log(this.hideHomePage);
  }

  /**
   * For inactive buttons
   */
  presentToast(text:string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  /**
   * 
   */
  SavePreferences() {
    this.storage.ready().then(() => {
      this.storage.set('hidehomepage', this.hideHomePage);
    });
  }

}
