import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-arbook',
  templateUrl: 'arbook.html'
})
export class ArBookPage {

  booktitle = "ثلاثة الأصول";
  chapters: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController,
    public menu: MenuController,
    private statusBar: StatusBar) {
    this.chapters = [
      { title: 'الفصل 1', component: ArBookPage },
      { title: 'الفصل 2', component: ArBookPage }
    ];
  }
  goToChapter(chapter) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
  }
  goToFullScreen() {
    this.statusBar.hide();
  }
}
