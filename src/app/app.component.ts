/***********************************************************************************************************
 * 
 * https://www.victordeandres.es/tutorial-implementaci%C3%B3n-de-notificaciones-push-en-angular-510e697276ba
 * 
 ************************************************************************************************************/
import { Component, OnInit } from '@angular/core';
import { WebPushNotificationsService } from './services/web-push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-push-notifications';

  constructor (
    private webPushNotificationsService: WebPushNotificationsService
  ) { }

  ngOnInit() {
    this.webPushNotificationsService.requestPermission();
  }
}
