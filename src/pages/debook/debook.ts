import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-debook',
  templateUrl: 'debook.html'
})
export class DeBookPage {

  booktitle = "Grundlagen des Islam";

  chapterTitles: any[];

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    private statusBar: StatusBar,
    private alertCtrl: AlertController) {
    this.initializeItems();
  }

  /**
   * 
   * @param el Scrolling to the searched chapter from the summary
   */
  goToChapter(index: number) {
    this.menu.close();
  }

  /**
   * Display fullscreen
   */
  goToFullScreen() {
    this.statusBar.hide();
  }

  /**
   * Alert the definition of some Quran verses
   * @param text
   */
  presentAlert(text: string) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: text,
      cssClass: 'alert',
      buttons: ['Ok']
    });
    alert.present();
  }

  /**
   * 
   * @param ev Seach in Summary menu (we need those 2 functions)
   */
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chapterTitles = this.chapterTitles.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * 
   */
  initializeItems() {
    this.chapterTitles = [
      "Vorwort"
    ];
  }
}
