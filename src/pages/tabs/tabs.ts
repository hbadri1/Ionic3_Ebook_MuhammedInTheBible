import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { ContactPage } from '../contact/contact';
import { EnOverviewPage } from '../enbook/overview/overview';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = EnOverviewPage;
  SettingsTab = SettingsPage;
  contactTab = ContactPage;

  constructor() {
  }
}
