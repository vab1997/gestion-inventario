const admin = require("firebase-admin");

const serviceAccount = require("./firebase-Key.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gestion-de-inventario-f6deb.firebaseio.com",
  });
} catch (e) {}

export const firestore = admin.firestore();
