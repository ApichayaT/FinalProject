import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { food } from "./data/food";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  arrayUnion,
  query,
  where,
  Timestamp,
  addDoc,
  arrayRemove,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY5icUE_IVtL9xZ5qKomzXdv58x3qKWYM",
  authDomain: "calories-52613.firebaseapp.com",
  projectId: "calories-52613",
  storageBucket: "calories-52613.appspot.com",
  messagingSenderId: "749082785706",
  appId: "1:749082785706:web:dd2271eb4c1c049e811dd3",
  measurementId: "G-WVS1ZM3JEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const setData = async () => {
  food.forEach((message, index, array) => {
    const indexNum = index + 1;
    console.log(indexNum);

    // console.log(typeof indexNum.toString());
    console.log(message);
    setDoc(doc(db, "nutrition", indexNum.toString()), message);
    console.log(`saet is succect ${indexNum} => )}`, message);
  });
  console.log("food", food);
};

export const getFoodDB = async () => {
  console.log("getFoodData");
  const allData = [];
  const nutritionData = collection(db, "nutrition");
  const querySnapshot = await getDocs(nutritionData);

  querySnapshot.forEach((doc) => {
    const FoodData = doc.data();
    allData.push(FoodData);
  });
  // console.log(" => ", allData);
  return allData;
};
