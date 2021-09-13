import firebase from 'firebase/app'
import 'firebase/auth'

/*const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDERID,
    REACT_APP_FIREBASE_APP_ID
} = process.env;*/

const firebaseConfig = {
    //Api info
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

