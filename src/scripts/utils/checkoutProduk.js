import { customAlphabet } from 'nanoid';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import {
  escapeHtml,
  flassMesagge, getUserInfo, redirect, uploadFile,
} from './functions';
import app from '../global/config';

const db = getFirestore(app);

const checkoutProduk = {
  async init(data) {
    await this._getDataCheckout(data);
  },

  async _getDataCheckout(data) {
    console.log(data);
  },
};

export default checkoutProduk;
