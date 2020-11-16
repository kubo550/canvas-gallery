import app from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT,
};
// Initialize Firebase

class FireApp {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.database = app.database();
    this.auth = app.auth();
  }

  async register(email, password, login, history) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
      await this.auth.currentUser.updateProfile({ displayName: login });
      localStorage.setItem(
        "currentUser",
        JSON.stringify(this.auth.currentUser)
      );
      setTimeout(() => history.push("/"), 500);
    } catch (err) {
      console.log(err);
    }
  }

  async logIn(email, password) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem(
        "currentUser",
        JSON.stringify(this.auth.currentUser)
      );
      return null;
    } catch (err) {
      return err;
    }
  }

  logOut() {
    app.auth().signOut();
  }
}

export default new FireApp();
