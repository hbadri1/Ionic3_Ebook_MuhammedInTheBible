import { Component, ViewChild, OnInit } from '@angular/core';
import {
  NavController, MenuController, Slides, ToastController, PopoverController, Events, LoadingController
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { EnOverviewPage } from '../overview/overview';
import { BookmarkPage } from './bookmarkpage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'enthumbs',
  templateUrl: 'enthumbs.html'
})
export class EnThumbsPage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  titles: any[];
  showHeader: boolean = false;
  tabs: any;
  mode: string;
  slideIndex: number = 0;
  titlePath = "assets/images/enpages/0-min.png";
  pagesPaths: String[] = [
    "assets/images/enpages/1-min.png",
    "assets/images/enpages/2-min.png",
    "assets/images/enpages/3-min.png",
    "assets/images/enpages/4-min.png",
    "assets/images/enpages/5-min.png",
    "assets/images/enpages/6-min.png",
    "assets/images/enpages/7-min.png",
    "assets/images/enpages/8-min.png",
    "assets/images/enpages/9-min.png",
    "assets/images/enpages/10-min.png",
    "assets/images/enpages/11-min.png",
    "assets/images/enpages/12-min.png",
    "assets/images/enpages/13-min.png",
    "assets/images/enpages/14-min.png",
    "assets/images/enpages/15-min.png",
    "assets/images/enpages/16-min.png",
    "assets/images/enpages/17-min.png",
    "assets/images/enpages/18-min.png",
    "assets/images/enpages/19-min.png",
    "assets/images/enpages/20-min.png",
    "assets/images/enpages/21-min.png",
    "assets/images/enpages/22-min.png",
    "assets/images/enpages/23-min.png",
    "assets/images/enpages/24-min.png",
    "assets/images/enpages/25-min.png",
    "assets/images/enpages/26-min.png",
    "assets/images/enpages/27-min.png",
    "assets/images/enpages/28-min.png",
    "assets/images/enpages/29-min.png",
    "assets/images/enpages/30-min.png",
    "assets/images/enpages/31-min.png",
    "assets/images/enpages/32-min.png",
    "assets/images/enpages/33-min.png",
    "assets/images/enpages/34-min.png",
    "assets/images/enpages/35-min.png",
    "assets/images/enpages/36-min.png",
    "assets/images/enpages/37-min.png",
    "assets/images/enpages/38-min.png",
    "assets/images/enpages/39-min.png",
    "assets/images/enpages/40-min.png",
    "assets/images/enpages/41-min.png",
    "assets/images/enpages/42-min.png",
    "assets/images/enpages/43-min.png",
    "assets/images/enpages/44-min.png",
    "assets/images/enpages/45-min.png",
    "assets/images/enpages/46-min.png",
    "assets/images/enpages/47-min.png",
    "assets/images/enpages/48-min.png",
    "assets/images/enpages/49-min.png",
    "assets/images/enpages/50-min.png",
    "assets/images/enpages/51-min.png",
    "assets/images/enpages/52-min.png",
    "assets/images/enpages/53-min.png",
    "assets/images/enpages/54-min.png",
    "assets/images/enpages/55-min.png",
    "assets/images/enpages/56-min.png",
    "assets/images/enpages/57-min.png",
    "assets/images/enpages/58-min.png",
    "assets/images/enpages/59-min.png",
    "assets/images/enpages/60-min.png",
    "assets/images/enpages/61-min.png",
    "assets/images/enpages/62-min.png",
    "assets/images/enpages/63-min.png",
    "assets/images/enpages/64-min.png",
    "assets/images/enpages/65-min.png",
    "assets/images/enpages/66-min.png",
    "assets/images/enpages/67-min.png",
    "assets/images/enpages/68-min.png",
    "assets/images/enpages/69-min.png",
    "assets/images/enpages/70-min.png",
    "assets/images/enpages/71-min.png",
    "assets/images/enpages/72-min.png",
    "assets/images/enpages/73-min.png",
    "assets/images/enpages/74-min.png",
    "assets/images/enpages/75-min.png",
    "assets/images/enpages/76-min.png",
    "assets/images/enpages/77-min.png",
    "assets/images/enpages/78-min.png",
    "assets/images/enpages/79-min.png",
    "assets/images/enpages/80-min.png",
    "assets/images/enpages/81-min.png",
    "assets/images/enpages/82-min.png",
    "assets/images/enpages/83-min.png",
    "assets/images/enpages/84-min.png",
    "assets/images/enpages/85-min.png",
    "assets/images/enpages/86-min.png",
    "assets/images/enpages/87-min.png",
    "assets/images/enpages/88-min.png",
    "assets/images/enpages/89-min.png",
    "assets/images/enpages/90-min.png",
    "assets/images/enpages/91-min.png",
    "assets/images/enpages/92-min.png",
    "assets/images/enpages/93-min.png",
    "assets/images/enpages/94-min.png",
    "assets/images/enpages/95-min.png",
    "assets/images/enpages/96-min.png",
    "assets/images/enpages/97-min.png",
    "assets/images/enpages/98-min.png",
    "assets/images/enpages/99-min.png",
    "assets/images/enpages/100-min.png",
    "assets/images/enpages/101-min.png",
    "assets/images/enpages/102-min.png",
    "assets/images/enpages/103-min.png",
    "assets/images/enpages/104-min.png",
    "assets/images/enpages/105-min.png",
    "assets/images/enpages/106-min.png",
    "assets/images/enpages/107-min.png",
    "assets/images/enpages/108-min.png",
    "assets/images/enpages/109-min.png",
    "assets/images/enpages/110-min.png",
    "assets/images/enpages/111-min.png",
    "assets/images/enpages/112-min.png",
    "assets/images/enpages/113-min.png",
    "assets/images/enpages/114-min.png",
    "assets/images/enpages/115-min.png",
    "assets/images/enpages/116-min.png",
    "assets/images/enpages/117-min.png",
    "assets/images/enpages/118-min.png",
    "assets/images/enpages/119-min.png",
    "assets/images/enpages/120-min.png",
    "assets/images/enpages/121-min.png",
    "assets/images/enpages/122-min.png",
    "assets/images/enpages/123-min.png",
    "assets/images/enpages/124-min.png",
    "assets/images/enpages/125-min.png",
    "assets/images/enpages/126-min.png",
    "assets/images/enpages/127-min.png",
    "assets/images/enpages/128-min.png",
    "assets/images/enpages/129-min.png",
    "assets/images/enpages/130-min.png",
    "assets/images/enpages/131-min.png",
    "assets/images/enpages/132-min.png",
    "assets/images/enpages/133-min.png",
    "assets/images/enpages/134-min.png",
    "assets/images/enpages/135-min.png",
    "assets/images/enpages/136-min.png",
    "assets/images/enpages/137-min.png",
    "assets/images/enpages/138-min.png",
    "assets/images/enpages/139-min.png",
    "assets/images/enpages/140-min.png",
    "assets/images/enpages/141-min.png",
    "assets/images/enpages/142-min.png",
    "assets/images/enpages/143-min.png",
    "assets/images/enpages/144-min.png",
    "assets/images/enpages/145-min.png",
    "assets/images/enpages/146-min.png",
    "assets/images/enpages/147-min.png",
    "assets/images/enpages/148-min.png",
    "assets/images/enpages/149-min.png",
    "assets/images/enpages/150-min.png",
    "assets/images/enpages/151-min.png",
    "assets/images/enpages/152-min.png",
    "assets/images/enpages/153-min.png",
    "assets/images/enpages/154-min.png",
    "assets/images/enpages/155-min.png",
    "assets/images/enpages/156-min.png",
    "assets/images/enpages/157-min.png",
    "assets/images/enpages/158-min.png",
    "assets/images/enpages/159-min.png",
    "assets/images/enpages/160-min.png",
    "assets/images/enpages/161-min.png",
    "assets/images/enpages/162-min.png",
    "assets/images/enpages/163-min.png",
    "assets/images/enpages/164-min.png",
    "assets/images/enpages/165-min.png",
    "assets/images/enpages/166-min.png",
    "assets/images/enpages/167-min.png",
    "assets/images/enpages/168-min.png",
    "assets/images/enpages/169-min.png",
    "assets/images/enpages/170-min.png",
    "assets/images/enpages/171-min.png",
    "assets/images/enpages/172-min.png",
    "assets/images/enpages/173-min.png",
    "assets/images/enpages/174-min.png",
    "assets/images/enpages/175-min.png",
    "assets/images/enpages/176-min.png",
    "assets/images/enpages/177-min.png",
    "assets/images/enpages/178-min.png",
    "assets/images/enpages/179-min.png",
    "assets/images/enpages/180-min.png",
    "assets/images/enpages/181-min.png",
    "assets/images/enpages/182-min.png",
    "assets/images/enpages/183-min.png",
    "assets/images/enpages/184-min.png",
    "assets/images/enpages/185-min.png",
    "assets/images/enpages/186-min.png",
    "assets/images/enpages/187-min.png",
    "assets/images/enpages/188-min.png",
    "assets/images/enpages/189-min.png",
    "assets/images/enpages/190-min.png",
    "assets/images/enpages/191-min.png",
    "assets/images/enpages/192-min.png",
    "assets/images/enpages/193-min.png",
    "assets/images/enpages/194-min.png",
    "assets/images/enpages/195-min.png",
    "assets/images/enpages/196-min.png",
    "assets/images/enpages/197-min.png",
    "assets/images/enpages/198-min.png",
    "assets/images/enpages/199-min.png",
    "assets/images/enpages/200.png",
    "assets/images/enpages/201.png",
    "assets/images/enpages/202.png",
    "assets/images/enpages/203.png",
    "assets/images/enpages/204.png",
    "assets/images/enpages/205.png",
    "assets/images/enpages/206.png",
    "assets/images/enpages/207.png",
    "assets/images/enpages/208.png",
    "assets/images/enpages/209.png",
    "assets/images/enpages/210.png",
    "assets/images/enpages/211.png",
    "assets/images/enpages/212.png",
    "assets/images/enpages/213.png",
    "assets/images/enpages/214.png",
    "assets/images/enpages/215.png",
    "assets/images/enpages/216.png",
    "assets/images/enpages/217.png",
    "assets/images/enpages/218.png",
    "assets/images/enpages/219.png",
    "assets/images/enpages/220.png",
    "assets/images/enpages/221.png",
    "assets/images/enpages/222.png",
    "assets/images/enpages/223.png",
    "assets/images/enpages/224.png",
    "assets/images/enpages/225.png",
    "assets/images/enpages/226.png",
    "assets/images/enpages/227.png",
    "assets/images/enpages/228.png",
    "assets/images/enpages/229.png",
    "assets/images/enpages/230.png",
    "assets/images/enpages/231.png",
    "assets/images/enpages/232.png",
    "assets/images/enpages/233.png",
    "assets/images/enpages/234.png",
    "assets/images/enpages/235.png",
    "assets/images/enpages/236.png",
    "assets/images/enpages/237.png",
    "assets/images/enpages/238.png",
    "assets/images/enpages/239.png",
    "assets/images/enpages/240.png",
    "assets/images/enpages/241.png"
  ];

  chaptersTitles = [
    { name: "Foreword", page: 7 },
    { name: "Preface", page: 14 },
    { name: "The Prophet’s (pbtuhem) Family Tree ", page: 17 },
    { name: "Brief Biography of Prof. Abdulahad Dawud ", page: 18 },
    { name: "Prefatory Remarks", page: 23 },
    { name: "And the Ahmed (pbuh) of all nations will come ", page: 34 },
    { name: "The question of birthright and the covenant", page: 40 },
    { name: "The mystery of the 'Mispa'", page: 48 },
    { name: "Muhammad (pbuh) is the 'Shiloh'", page: 58 },
    { name: "Muhammad (pbuh) and Constantine the Great", page: 63 },
    { name: "Muhammad (pbuh) is the son of Man", page: 67 },
    { name: "King David (pbuh) calls him 'My Lord'", page: 87 },
    { name: "The Lord and the apostle of the Covenant", page: 96 },
    { name: "Genuine Prophets (pbuh)  Preach Only Islam", page: 104 },
    { name: "Islam is the Kingdom of God on earth ", page: 114 },
    //Part 2
    { name: "Islam and Ahmadiyah announced by Angels ", page: 125 },
    { name: "'Eudokia' means 'Ahmadiyah'", page: 135 },
    { name: "John the Baptist (pbuh) announces a powerful prophet", page: 142 },
    { name: "The Prophet foretold by the Baptist was certainly Muhammad (pbuh)", page: 153 },
    { name: "The baptism of John (pbuh) and Jesus (pbuh) only a type of the “sibghatullah”", page: 161 },
    { name: "The 'sibghatulallah' or the Baptism with the Holy Spirit and fire", page: 172 },
    { name: "The 'Paraclete' is not the Holy Spirit", page: 182 },
    { name: "'Periglytos' means 'Ahmad' (pbuh)", page: 192 },
    { name: "'The Son of Man,' Who is He? ", page: 202 },
    { name: "By the Apocalyptical 'Son of Man, 'Muhammad (pbuh)  is  Intended", page: 212 },
    { name: "The Son of  Man, according to the Jews Apocalypses", page: 224 },
    //Others
    { name: "Glossary", page: 234 },
    { name: "Editors’ References", page: 235 }
  ];
  onSuccess = (data) => {
    console.log('success preloading', data);
  }
  onError = (data) => {
    console.log('success preloading', data);
  }

  /**
   * Constructor
   * @param statusBar 
   */
  constructor(private statusBar: StatusBar,
    public toastCtrl: ToastController,
    public menu: MenuController,
    public storage: Storage,
    public popoverCtrl: PopoverController,
    public events: Events,
    public loadingCtrl: LoadingController,
    private nav: NavController) {
    //I want to do that before any thing else
    /*this.statusBar.hide();
    this.tabs = document.querySelector('.tabbar');
    this.tabs.style.display = 'none';*/
    //Here just initializing the class members and not the actual work
    this.chaptersTitles = [
      { name: "Foreword", page: 7 },
      { name: "Preface", page: 14 },
      { name: "The Prophet’s (pbtuhem) Family Tree ", page: 17 },
      { name: "Brief Biography of Prof. Abdulahad Dawud ", page: 18 },
      { name: "Prefatory Remarks", page: 23 },
      { name: "And the Ahmed (pbuh) of all nations will come ", page: 34 },
      { name: "The question of birthright and the covenant", page: 40 },
      { name: "The mystery of the 'Mispa'", page: 48 },
      { name: "Muhammad (pbuh) is the 'Shiloh'", page: 58 },
      { name: "Muhammad (pbuh) and Constantine the Great", page: 63 },
      { name: "Muhammad (pbuh) is the son of Man", page: 67 },
      { name: "King David (pbuh) calls him 'My Lord'", page: 87 },
      { name: "The Lord and the apostle of the Covenant", page: 96 },
      { name: "Genuine Prophets (pbuh)  Preach Only Islam", page: 104 },
      { name: "Islam is the Kingdom of God on earth ", page: 114 },
      //Part 2
      { name: "Islam and Ahmadiyah announced by Angels ", page: 125 },
      { name: "'Eudokia' means 'Ahmadiyah'", page: 135 },
      { name: "John the Baptist (pbuh) announces a powerful prophet", page: 142 },
      { name: "The Prophet foretold by the Baptist was certainly Muhammad (pbuh)", page: 153 },
      { name: "The baptism of John (pbuh) and Jesus (pbuh) only a type of the “sibghatullah”", page: 161 },
      { name: "The 'sibghatulallah' or the Baptism with the Holy Spirit and fire", page: 172 },
      { name: "The 'Paraclete' is not the Holy Spirit", page: 182 },
      { name: "'Periglytos' means 'Ahmad' (pbuh)", page: 192 },
      { name: "'The Son of Man,' Who is He? ", page: 202 },
      { name: "By the Apocalyptical 'Son of Man, 'Muhammad (pbuh)  is  Intended", page: 212 },
      { name: "The Son of  Man, according to the Jews Apocalypses", page: 224 },
      //Others
      { name: "Glossary", page: 234 },
      { name: "Editors’ References", page: 235 }
    ];

  }

  ionViewDidLoad() {
    this.statusBar.hide();
    this.tabs = document.querySelector('.tabbar');
    this.tabs.style.display = 'none';
  }

  ngOnInit() {
     this.statusBar.hide();
     this.tabs = document.querySelector('.tabbar');
     this.tabs.style.display = 'none';

    //Because can not be launched at first start up
    this.initializeItems();
    /*this.nativeAudio.preloadComplex('flipSoundId', 'assets/mp3/flip.mp3', 3, 1, 0)
      .then(this.onSuccess, this.onError);*/
    //Subscribe to the event of bookmarking
    this.events.subscribe('gottopage', (pageNumber) => {
      //We remove one because slides begin with 0
      this.slides.slideTo(parseInt(pageNumber) - 1);
    });
  }

  navigateToOverview() {
    this.nav.push(EnOverviewPage);
    this.tabs.style.display = 'flex';
  }


  /**
   * When slide changes
   */
  slideChanged() {
    /*this.nativeAudio.play('flipSoundId',
      () => console.log('uniqueId1 is done playing')
    );*/
  }

  /**
   * 
   * @param item 
   */
  goToChapter(item) {
    this.menu.close();
    this.presentLoadingCustom(item);
  }

  /**
   * 
   */
  initializeItems() {
    this.chaptersTitles = [
      { name: "Foreword", page: 7 },
      { name: "Preface", page: 14 },
      { name: "The Prophet’s (pbtuhem) Family Tree ", page: 17 },
      { name: "Brief Biography of Prof. Abdulahad Dawud ", page: 18 },
      { name: "Prefatory Remarks", page: 23 },
      { name: "And the Ahmed (pbuh) of all nations will come ", page: 34 },
      { name: "The question of birthright and the covenant", page: 40 },
      { name: "The mystery of the 'Mispa'", page: 48 },
      { name: "Muhammad (pbuh) is the 'Shiloh'", page: 58 },
      { name: "Muhammad (pbuh) and Constantine the Great", page: 63 },
      { name: "Muhammad (pbuh) is the son of Man", page: 67 },
      { name: "King David (pbuh) calls him 'My Lord'", page: 87 },
      { name: "The Lord and the apostle of the Covenant", page: 96 },
      { name: "Genuine Prophets (pbuh)  Preach Only Islam", page: 104 },
      { name: "Islam is the Kingdom of God on earth ", page: 114 },
      //Part 2
      { name: "Islam and Ahmadiyah announced by Angels ", page: 125 },
      { name: "'Eudokia' means 'Ahmadiyah'", page: 135 },
      { name: "John the Baptist (pbuh) announces a powerful prophet", page: 142 },
      { name: "The Prophet foretold by the Baptist was certainly Muhammad (pbuh)", page: 153 },
      { name: "The baptism of John (pbuh) and Jesus (pbuh) only a type of the “sibghatullah”", page: 161 },
      { name: "The 'sibghatulallah' or the Baptism with the Holy Spirit and fire", page: 172 },
      { name: "The 'Paraclete' is not the Holy Spirit", page: 182 },
      { name: "'Periglytos' means 'Ahmad' (pbuh)", page: 192 },
      { name: "'The Son of Man,' Who is He? ", page: 202 },
      { name: "By the Apocalyptical 'Son of Man, 'Muhammad (pbuh)  is  Intended", page: 212 },
      { name: "The Son of  Man, according to the Jews Apocalypses", page: 224 },
      //Others
      { name: "Glossary", page: 234 },
      { name: "Editors’ References", page: 235 }
    ];
  }

  /**
   * 
   * @param ev 
   */
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chaptersTitles = this.chaptersTitles.filter((item) => {
        return (item.name.toLowerCase().includes(val.toLowerCase()));
      })
    }
  }

  /**
   * Tap to show nav bar
   * @param ev 
   */
  showHideNavBar() {
    if (this.showHeader == false) {
      this.statusBar.show();
      this.showHeader = true;
      //this.tabs.style.display = 'flex';
    } else {
      this.statusBar.hide();
      this.showHeader = false;
      //this.tabs.style.display = 'none';
    }
  }

  /**
   * 
   * @param text 
   */
  presentToast(text: any) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000
    });
    toast.present();
  }

  /**
   * Display the list of book marks
   * @param ev 
   */
  showBookMark(ev) {
    let pageNumber = this.slides.getActiveIndex() + 1;
    let popover = this.popoverCtrl.create(BookmarkPage, {
      pageNumber
    });
    popover.present({
      ev: ev
    });

    /*popover.dismiss({
      ev: ev
    });*/

  }

  //To use when loading the slides
  presentLoadingCustom(item: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
          <ion-spinner name="bubbles">Loading...</ion-spinner>
          </div>
        </div>`,
      duration: 2000
    });

    loading.onDidDismiss(() => {
      this.slides.slideTo(item.page - 1, 200, false);
    });

    loading.present();
  }


}
