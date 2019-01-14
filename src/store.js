// https://github.com/prescottprue/react-redux-firebase

import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
// @todo

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBPuPEenQv5sp0nlWx4eqbEcW9H62NiasQ",
  authDomain: "clientapp-de9ae.firebaseapp.com",
  databaseURL: "https://clientapp-de9ae.firebaseio.com",
  projectId: "clientapp-de9ae",
  storageBucket: "clientapp-de9ae.appspot.com",
  messagingSenderId: "266125010224"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  userFirestoreForProfile: true // Firestore for profile instead of real time DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// add reactReduxFirebase enhancer when making store creator
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create onitial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
