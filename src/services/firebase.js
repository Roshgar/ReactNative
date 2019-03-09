import firebase from 'react-native-firebase';

const config = {
  apiKey: 'AIzaSyCcL_NTWJf8TFXYxfFZxCyubt-6bcLZQeQ',
  authDomain: 'reactnative-8ec2d.firebaseapp.com',
  databaseURL: 'https://reactnative-8ec2d.firebaseio.com',
  projectId: 'reactnative-8ec2d',
  storageBucket: 'reactnative-8ec2d.appspot.com',
  messagingSenderId: '205034393977'
};

const firebaseService = firebase.initializeApp(config);

export const fetchUser = async (id) => {
  const userRef = await firebaseService.database().ref(`Users/${id}`);
  return userRef;
};

export const signUpUser = async (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      alert(error);
    });
};

export const listenToAuthUser = async (func) => {
  firebase.auth().onAuthStateChanged(func);
};

export const getCurrentUser = async () => firebase.auth().currentUser.uid.valueOf();

export const logOutCurrentUser = async () => firebase.auth().signOut();

export const loginUser = async (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      alert(error);
    });
};

export const createUser = async (email, nick) => {
  const uID = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`Users/${uID}`)
    .set({
      email,
      nick
    });
};

export default firebaseService;