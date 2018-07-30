if ('serviceWorker' in navigator) {
    // console.log('service worker supporté');
    navigator.serviceWorker
      .register('service-worker.js', { scope: '/' })
      .then(function(registration,) {
        // console.log("Service Worker Registered", registration);
      })
      .catch(function(err) {
        // console.log("Service Worker Failed to Register", err);
      })
  
  }
  