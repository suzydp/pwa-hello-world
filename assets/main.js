/* eslint-disable no-use-before-define */

async function installServiceWorker () {
  const reg = await navigator.serviceWorker.register('./service-worker.js');
  console.log('[SW] Register', reg);
}

installServiceWorker();