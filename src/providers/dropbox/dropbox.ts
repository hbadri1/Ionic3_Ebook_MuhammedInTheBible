import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DropboxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DropboxProvider {

  accessToken: any;
  folderHistory: any = [];

  constructor(public http: Http) {

  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getUserInfo() {

  }

  getFolders(path?) {

  }

  goBackFolder() {

  }

}
