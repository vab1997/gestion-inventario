import firebase from "firebase/app";
import auth from "firebase/auth";
import firestore from "firebase/firestore";

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

const db = firebase.firestore();

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

export const signout = () => {
  return firebase.auth().signOut();
};

export const registrarEquiposPerifericos = ({
  codigo,
  descripcion,
  fecha,
  ubicacion,
  monitor,
  teclado,
  mouse,
  usuario,
  cuil,
  nombre,
  apellido,
  garantia,
}) => {
  db.collection("equipos").add({
    codigo,
    descripcion,
    fecha,
    ubicacion,
    usuario,
    garantia,
  });
  db.collection("perifericos").add({
    codigoEquipo: codigo,
    monitor,
    teclado,
    mouse,
  });
  return db.collection("proveedores").add({
    codigoEquipo: codigo,
    cuil,
    nombre,
    apellido,
  });
};

export const mapObject = (doc) => {
  const data = doc.data();
  const id = doc.id;

  return {
    ...data,
    id,
  };
};

export const obtenerUbicaciones = (callback) => {
  return db.collection("ubicaciones").onSnapshot(({ docs }) => {
    const ubicaciones = docs.map(mapObject);
    callback(ubicaciones);
  });
};

export const obtenerEquipos = (
  callbackEquipos,
  callbackPerifericos,
  callbackProveedores
) => {
  db.collection("equipos").onSnapshot(({ docs }) => {
    const equipos = docs.map(mapObject);
    callbackEquipos(equipos);
  });
  db.collection("perifericos").onSnapshot(({ docs }) => {
    const perifericos = docs.map(mapObject);
    callbackPerifericos(perifericos);
  });
  db.collection("proveedores").onSnapshot(({ docs }) => {
    const proveedores = docs.map(mapObject);
    callbackProveedores(proveedores);
  });
};

export const bajaEquipo = ({ idEquipo, idPeriferico, idProveedor }) => {
  db.collection("equipos").doc(idEquipo).delete();
  db.collection("perifericos").doc(idPeriferico).delete();
  return db.collection("proveedores").doc(idProveedor).delete();
};

export const actualizarEquipo = ({
  idEquipo,
  idPeriferico,
  descripcion,
  fecha,
  ubicacion,
  monitor,
  teclado,
  mouse,
  usuario,
}) => {
  db.collection("equipos").doc(idEquipo).update({
    descripcion: descripcion,
    fecha: fecha,
    ubicacion: ubicacion,
    usuario: usuario,
  });
  db.collection("perifericos")
    .doc(idPeriferico)
    .update({ monitor: monitor, teclado: teclado, mouse: mouse });

  db.collection("historicoCambios").add({
    idEquipo,
    descripcion,
    monitor,
    teclado,
    mouse,
    fecha: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const buscarHistoricoEquipo = (id, callback) => {
  return db
    .collection("historicoCambios")
    .where("idEquipo", "==", `${id}`)
    .get()
    .then((snapshot) => {
      const cambios = snapshot.docs.map(mapObject);
      callback(cambios);
    });
};
