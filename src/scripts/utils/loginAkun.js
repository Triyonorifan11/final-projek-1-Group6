import {
  getFirestore, query, collection, where, limit, getDocs,
} from 'firebase/firestore';
import {
  GoogleAuthProvider, getAuth, signInWithPopup, signOut,
} from 'firebase/auth';
import app from '../global/config';
import {
  addClassElement, flassMesagge, innerElement, redirect, removeClassElement,
} from './functions';

// initioalisasi
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const loginAkun = {
  async init() {
    this._loginMethod();
  },

  async _loginMethod() {
    const auth = getAuth();
    addClassElement('#btn-login', 'disabled');
    innerElement('#btn-login', '<i class="bi bi-google mr-3"></i> Mohon Tunggu ...');
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        const { email } = user;

        this._loginAkun(email, token);
      }).catch((error) => {
        removeClassElement('#btn-login', 'disabled');
        innerElement('#btn-login', '<i class="bi bi-google mr-3"></i> Login With Google');
        flassMesagge('error', error.message, 'Error!');
        // ...
      });
  },

  async _isExistUser(email) {
    const q = query(collection(db, 'users'), where('email', '==', email), limit(1));
    const docSnap = await getDocs(q);
    if (docSnap.size > 0) {
      const docindex = docSnap.docs[0];
      const user = docindex.data();
      user.id = docindex.id;
      return user;
    }
    return null;
  },

  async signOutAkun() {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('berhasil logout');
    }).catch((error) => {
      flassMesagge('error', error, 'Upss!');
    });
  },

  async _loginAkun(email, token) {
    try {
      const checkemail = await this._isExistUser(email);
      if (checkemail) {
        localStorage.setItem('token_access', token);
        localStorage.setItem('user_collexin', JSON.stringify(checkemail));
        window.location.reload();
        redirect('#/');
      } else {
        flassMesagge('warning', 'Email tidak terdaftar, \nSilahkan register!', 'Perhatian!');
        removeClassElement('#btn-login', 'disabled');
        innerElement('#btn-login', '<i class="bi bi-google mr-3"></i> Login With Google');
        await this.signOutAkun();
      }
    } catch (error) {
      removeClassElement('#btn-login', 'disabled');
      innerElement('#btn-login', '<i class="bi bi-google mr-3"></i> Login With Google');
      flassMesagge('error', error, 'Upss!');
    }
  },
};

export default loginAkun;
