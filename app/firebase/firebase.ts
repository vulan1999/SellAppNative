// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCd5-z7FmIAbRbqtSt76OzLkdcJPmgki04',

  authDomain: 'nativefirebase-b3a21.firebaseapp.com',

  projectId: 'nativefirebase-b3a21',

  storageBucket: 'nativefirebase-b3a21.appspot.com',

  messagingSenderId: '932789894844',

  appId: '1:932789894844:web:e0b372e469d2cae81a9ab9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Services
const db = getFirestore(app)
// Collection ref
export const listingsColRef = collection(db, 'listings')
