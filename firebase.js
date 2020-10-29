import firebase from 'firebase/app'
import 'firebase/auth'

const App = firebase.initializeApp({
    apiKey: "AIzaSyCNW_RgIZtOBYnUmgBP7kIGiaWHgVEelIU",
  authDomain: "react-auth-flow.firebaseapp.com",
  databaseURL: "https://react-auth-flow.firebaseio.com",
  projectId: "react-auth-flow",
  storageBucket: "react-auth-flow.appspot.com",
  messagingSenderId: "826932698392",
  appId: "1:826932698392:web:febb3d809dd3adbb8b926d"
})

export const auth = App.auth()
export default App