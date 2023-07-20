'use strict';
self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log(data);
  event.waitUntil(self.registration.showNotification(
    data.title,   
    {
      body: data.message,
      icon: '../../../assets/nota.png'
    }
  ));
});