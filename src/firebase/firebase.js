import firebase from "firebase";
import config from "./config";

const uiConfig = callback => {
  return {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: callback
    }
  };
};

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain
});

export { uiConfig, firebase };
