import firebase from "firebase";

const uiConfig = callback => {
  return {
    signInFlow: "popup",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: callback
    }
  };
};

firebase.initializeApp({
  apiKey: "AIzaSyBNEZMSCgfoizQ9tAL0SMNDk62HsE9ROJo",
  authDomain: "shop-project-4ccad.firebaseapp.com"
});
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user);
//   } else {

//   }
// });

export { uiConfig, firebase };
