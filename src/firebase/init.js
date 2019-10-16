import * as firebase from 'firebase/app'
import 'firebase/firestore'
 
var firebaseConfig = {
        apiKey: 'AIzaSyCWQ2Y8K-Qxx4EjNnOV-ueWAkLcSzy53-U',
        authDomain: 'hope-chat.firebaseapp.com',
        projectId: 'hope-chat-36745'
};
 
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()