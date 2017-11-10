import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { SettingsPage } from '../pages/settings/settings';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EnOverviewPage } from '../pages/enbook/overview/overview';
import { EnThumbsPage } from '../pages/enbook/enbookthumbs/enthumbs';
import { BookmarkPage } from '../pages/enbook/enbookthumbs/bookmarkpage';
import { ArBookPage } from '../pages/arbook/arbook';
import { SpBookPage } from '../pages/spbook/spbook';
import { FrBookPage } from '../pages/frbook/frbook';
import { DeBookPage } from '../pages/debook/debook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { NativeAudio } from '@ionic-native/native-audio';
import { SimpleTimer } from 'ng2-simple-timer';
import { DropboxProvider } from '../providers/dropbox/dropbox';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArBookPage,
    FrBookPage,
    SpBookPage,
    DeBookPage,
    EnOverviewPage,
    EnThumbsPage,
    BookmarkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArBookPage,
    FrBookPage,
    SpBookPage,
    DeBookPage,
    EnOverviewPage,
    EnThumbsPage,
    BookmarkPage
  ],
  providers: [
    SimpleTimer,
    NativeAudio,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    YoutubeVideoPlayer,
    IonicStorageModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DropboxProvider
  ]
})
export class AppModule { }
