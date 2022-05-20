// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc, updateDoc, getDoc, getDocs, arrayUnion, query, where, Timestamp, addDoc, arrayRemove } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzSgj4XPBc-xByNZs5J-iB7_IxlFP7waE",
  authDomain: "finalproject-79dcf.firebaseapp.com",
  projectId: "finalproject-79dcf",
  storageBucket: "finalproject-79dcf.appspot.com",
  messagingSenderId: "305268999774",
  appId: "1:305268999774:web:141c0d98f656f7387b16cf",
  measurementId: "G-1BWT2Z7L16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

  export const getFoodData = async () => {
    console.log("getFoodData");
    const allData =[]
    const nutritionData = collection(db, 'nutrition');
    const querySnapshot = await getDocs(nutritionData);
   
    querySnapshot.forEach((doc) => {
      const FoodData = doc.data()
      allData.push(FoodData)
    });
    // console.log(" => ", allData);
    return allData
  };
