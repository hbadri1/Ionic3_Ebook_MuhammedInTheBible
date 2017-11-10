import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { EnThumbsPage } from '../enbookthumbs/enthumbs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { NativeAudio } from '@ionic-native/native-audio';
import { SimpleTimer } from 'ng2-simple-timer';


@Component({
  selector: 'page-enoverview',
  templateUrl: 'enoverview.html'
})
export class EnOverviewPage implements OnInit, OnDestroy {
  chapterTitles: any[];
  enThumbsPage: any;
  onSuccess = (data) => {
    console.log('success preloading', data);
  }
  onError = (data) => {
    console.log('success preloading', data);
  }
  isPlaying = false;
  timerId: string;
  totlaLength = 695;
  counter = 0;
  percentage = '0';

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    private statusBar: StatusBar,
    private youtube: YoutubeVideoPlayer,
    public toastCtrl: ToastController,
    private nativeAudio: NativeAudio,
    private audioTimer: SimpleTimer,
    public loadingCtrl: LoadingController, ) {
    this.enThumbsPage = EnThumbsPage;
  }

  ngOnInit() {
    this.nativeAudio.preloadComplex('introductionId', 'assets/mp3/introduction.m4a', 8, 1, 0)
      .then(this.onSuccess, this.onError);
    this.audioTimer.newTimer('audiotimer', 1);
  }

  ngOnDestroy() {
    if (this.isPlaying) {
      this.nativeAudio.stop('introductionId');
    }
    this.audioTimer.unsubscribe(this.timerId);
  }

  init() {
    this.stopPlaying();
    this.presentLoadingCustom();
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
          <ion-spinner name="bubbles">Loading...</ion-spinner>
          </div>
        </div>`,
      duration: 1000
    });

    loading.onDidDismiss(() => {
      //this.slides.slideTo(item.page - 1, 200, false);
    });

    loading.present();
  }
  goPlaying() {
    //Start playing
    this.nativeAudio.play('introductionId',
      () => {
        console.log('introductionId is done playing');
        this.isPlaying = true;
      }
    );
    this.isPlaying = true;
    //Start the timer
    if (!this.timerId) {
      this.timerId = this.audioTimer.subscribe('audiotimer', () => {
        this.counter--;
        this.percentage = ((this.counter / this.totlaLength) * -100).toFixed(0);
      });
    }
  }

  stopPlaying() {
    this.isPlaying = false;
    this.nativeAudio.stop('introductionId');
    //Cancel timer
    this.audioTimer.unsubscribe(this.timerId);
    this.counter = 0;
    this.timerId = null;
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

  playYoutubeVideo() {
    this.stopPlaying();
    this.youtube.openVideo('lDabE8YJSw8');
  }

  /**
  * For inactive buttons
  */
  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'Not ready yet!',
      duration: 3000
    });
    toast.present();
  }
}
