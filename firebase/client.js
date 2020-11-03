import firebase from "firebase/app";
import auth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnJLlfKkdJvZEm_Tznd0nFB-SQ-f3VRFw",
  authDomain: "gestion-de-inventario-f6deb.firebaseapp.com",
  databaseURL: "https://gestion-de-inventario-f6deb.firebaseio.com",
  projectId: "gestion-de-inventario-f6deb",
  storageBucket: "gestion-de-inventario-f6deb.appspot.com",
  messagingSenderId: "395399460718",
  appId: "1:395399460718:web:e3d972ee1d5045c27a337f",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const crearUsuarioEmailPassword = async ({
  nombre,
  email,
  password,
}) => {
  const nuevoUsuario = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return await nuevoUsuario.user.updateProfile({ displayName: nombre });
};

export const loginEmailPassword = ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

//login github
export const loginConGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

//login google
export const loginConGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { uid, displayName, email, photoURL } = user;

  return {
    uid,
    displayName,
    email,
    photoURL,
  };
};

export const onAuthStateChanged = (onchange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

    onchange(normalizeUser);
  });
};
