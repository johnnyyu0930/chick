import * as React from "react";
import { render } from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,

} from "@react-firebase/auth";

const config = {
    apiKey: "AIzaSyAjIf_nz5XX2Ajaa_r_qts7F8dVZUfzzw4",
    authDomain: "chick-order.firebaseapp.com",
    databaseURL: "https://chick-order.firebaseio.com",
    projectId: "chick-order",
    storageBucket: "chick-order.appspot.com",
    messagingSenderId: "470145093649",
    appId: "1:470145093649:web:e3199b4a59b45b6f"
}
export const App = () => {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
       
      </div>
    </FirebaseAuthProvider>
  );
};
render(<App />, document.getElementById("app"));
