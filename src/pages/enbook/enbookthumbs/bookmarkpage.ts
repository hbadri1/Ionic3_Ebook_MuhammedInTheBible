import { Component } from '@angular/core';
import { NavParams, Events, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'bookmark',
  templateUrl: 'bookmarkpage.html'
})


export class BookmarkPage {
  bookmark; //Bookmarked page number
  alreadyBookMarkedPage = null;

  constructor(
    private navParams: NavParams,
    public storage: Storage,
    public events: Events,
    public viewCtrl: ViewController) {
    this.bookmark = this.navParams.data.pageNumber;
  }

  ngOnInit() {
    //Is ther already bookmarked page
    this.storage.ready().then(() => {
      this.storage.get('bookmark').then((bookmarked) => {
        this.alreadyBookMarkedPage = bookmarked;
      });
    });
  }

  bookMarkThisPage() {
    this.storage.ready().then(() => {
      this.storage.set('bookmark', this.bookmark);
      this.viewCtrl.dismiss();
    });
  }
  /**
   * Go to the specific page chosen on the book mark
   */
  gotToPage() {
    this.events.publish('gottopage', this.alreadyBookMarkedPage);
    this.viewCtrl.dismiss();
  }
}