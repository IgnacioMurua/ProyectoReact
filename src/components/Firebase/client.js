import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBbmXvZFO3b5FQS92HmxypKFTMwZbNsQXA",
    authDomain: "technocom-a33b1.firebaseapp.com",
    projectId: "technocom-a33b1",
    storageBucket: "technocom-a33b1.appspot.com",
    messagingSenderId: "392127320705",
    appId: "1:392127320705:web:8ca53723759f6fda077380"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)