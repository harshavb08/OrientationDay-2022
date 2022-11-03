import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDOpEUTwwPKZehG5dV_7PuAm89sAeY_xPc",
    authDomain: "orientationday-2022.firebaseapp.com",
    databaseURL: "https://orientationday-2022-default-rtdb.firebaseio.com",
    projectId: "orientationday-2022",
    storageBucket: "orientationday-2022.appspot.com",
    messagingSenderId: "861758914761",
    appId: "1:861758914761:web:5e48e6d830d3392ee70d18",
    measurementId: "G-RFMPBFTDHD"
};
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);