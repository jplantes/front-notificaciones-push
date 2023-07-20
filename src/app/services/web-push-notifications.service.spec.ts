import { TestBed } from '@angular/core/testing';

import { WebPushNotificationsService } from './web-push-notifications.service';

describe('WebPushNotificationsService', () => {
  let service: WebPushNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPushNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
