import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConf'
const fireApp = firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true})
export default fireApp.firestore()
