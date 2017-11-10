import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  hideHomePage: boolean;
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('hidehomepage').then((hidden) => { this.hideHomePage = hidden });
  }

  updateHideHomePage() {
    this.storage.ready().then(() => {
      this.storage.set('hidehomepage', this.hideHomePage);
    });
  }
}
