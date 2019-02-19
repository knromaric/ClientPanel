import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyAaAsv7OWiP1cC-BYVUQlJ7jkON9Fiq5Tk",
  authDomain: "reactclientpanel-abf86.firebaseapp.com",
  databaseURL: "https://reactclientpanel-abf86.firebaseio.com",
  projectId: "reactclientpanel-abf86",
  storageBucket: "reactclientpanel-abf86.appspot.com",
  messagingSenderId: "810715487774"
}

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

//initialize firebase instance
firebase.initializeApp(firebaseConfig);
//initialize the firestore
//const firestore = firebase.firestore();
// const settings ={timestampsInSnapshots: true};
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
  reduxFirestore(firebase) 
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
})

//create our initial state
const initialState = {};

//create our store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)); 

export default store;