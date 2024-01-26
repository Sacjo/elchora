import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCbzoZcc4-mT9jtFdfR8i-OA09XYBM5yGE",
  authDomain: "elchora.firebaseapp.com",
  databaseURL: "https://elchora-default-rtdb.firebaseio.com",
  projectId: "elchora",
  storageBucket: "elchora.appspot.com",
  messagingSenderId: "243660325645",
  appId: "1:243660325645:web:5765bdd4a8ee40578da644"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la base de datos
const database = getDatabase(app);

export { database };
