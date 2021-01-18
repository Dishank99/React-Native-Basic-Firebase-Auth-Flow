import firebase from 'firebase/app'
import 'firebase/auth'

import env from './env'

const App = firebase.initializeApp({
  apiKey: env.REACT_FIREBASE_API_KEY,
  authDomain: env.REACT_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.REACT_FIREBASE_DATABASE_URL,
  projectId: env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.REACT_FIREBASE_APP_ID
})

export const auth = App.auth()
export default App