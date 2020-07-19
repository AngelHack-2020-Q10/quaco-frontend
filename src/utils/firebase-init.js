import * as firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyDhYdzx5VE4z76wo__pfAkuUkg2aaPsxcA",
  authDomain: "quaco-2020.firebaseapp.com",
  databaseURL: "https://quaco-2020.firebaseio.com",
  projectId: "quaco-2020",
  storageBucket: "quaco-2020.appspot.com",
  messagingSenderId: "816475065452",
  appId: "1:816475065452:web:3c64957e476959285f5c49",
};

function init() {
  if (firebase.apps.length) {
    return;
  }
  firebase.initializeApp(config);
}
init();

export default firebase;
