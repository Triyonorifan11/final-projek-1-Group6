import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../global/config';
import { flassMesagge } from './functions';

// initioalisasi
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const registerAkun = {
  async init() {
    await this._registerMethod();
  },

  async _registerMethod() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const { user } = result;
        console.log('token:', token);
        console.log('user:', user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        flassMesagge('error', error.message, 'Error!');
        // ...
      });
  },
};

export default registerAkun;
