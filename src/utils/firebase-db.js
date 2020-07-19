// firebase real-time db
import firebase from "firebase/app";
import "firebase/database";

function saveQuarantineLogByGoogleAccountUuid(loginUuid, startDate) {
  return firebase
    .database()
    .ref(`quarantine-log/${loginUuid}`)
    .set({
      startDate,
      createdTime: getCurrentTime(),
    });
}

function checkIfQuarantineLogInsertedByGoogleAccountUuid(loginUuid) {
  return new Promise(resolve => {
    firebase
      .database()
      .ref("/quarantine-log/")
      .once("value", snapshot => {
        const isLogInsertedBefore = snapshot.child(loginUuid).exists(); // true
        resolve(isLogInsertedBefore);
      });
  });
}

function fetchQuarantineLogByGoogleAccountUuid(loginUuid) {
  return new Promise(resolve => {
    firebase
      .database()
      .ref("/quarantine-log/")
      .child(loginUuid)
      .orderByKey()
      .on("value", snapshot => {
        const { createdTime, startDate } = snapshot.val();
        resolve({ createdTime, startDate });
      });
  });
}

function getCurrentTime() {
  return new Date().toLocaleString();
}

export {
  saveQuarantineLogByGoogleAccountUuid,
  checkIfQuarantineLogInsertedByGoogleAccountUuid,
  fetchQuarantineLogByGoogleAccountUuid,
};
