import {
  getFirestore, query, collection, where, limit, getDocs, setDoc, doc,
} from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { customAlphabet } from 'nanoid';
import app from '../global/config';
import {
  addClassElement, flassMesagge, innerElement, removeClassElement,
} from './functions';

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
    addClassElement('#btn-register', 'disabled');
    innerElement('#btn-register', '<i class="bi bi-google mr-3"></i> Mohon Tunggu ...');
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        const payload = {
          email: user.email,
          nama_user: user.displayName,
          url_foto: user.photoURL,
          no_telp: user.phoneNumber,
          role: 'customer',
        };

        this._registerAkun(payload);
      }).catch((error) => {
        removeClassElement('#btn-register', 'disabled');
        innerElement('#btn-register', '<i class="bi bi-google mr-3"></i> Register With Google');
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

  async _registerAkun(data) {
    try {
      const checkEmail = await this._isExistUser(data.email);
      if (checkEmail) {
        flassMesagge('warning', 'Email telah terdaftar, \nSilahkan Login!', 'Perhatian!');
        removeClassElement('#btn-register', 'disabled');
        innerElement('#btn-register', '<i class="bi bi-google mr-3"></i> Register With Google');
      } else {
        const nanoid = customAlphabet('1234567890abcdefghijklZ', 19);
        const idUser = `user_${nanoid()}`;
        await setDoc(doc(db, 'users', idUser), data);
        flassMesagge('success', 'Silahkan Login!', 'Berhasil');
        removeClassElement('#btn-register', 'disabled');
        innerElement('#btn-register', '<i class="bi bi-google mr-3"></i> Register With Google');
      }
    } catch (error) {
      removeClassElement('#btn-register', 'disabled');
      innerElement('#btn-register', '<i class="bi bi-google mr-3"></i> Register With Google');
      flassMesagge('error', error, 'Upss!');
    }
  },
};

export default registerAkun;
