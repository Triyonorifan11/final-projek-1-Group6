import { customAlphabet } from 'nanoid';
import {
  collection, doc, getDocs, getFirestore, query, setDoc, updateDoc, where,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import {
  addClassElement,
  flassMesagge, getUserInfo, innerElement, redirect, removeClassElement, removeItemCart,
} from './functions';
import app from '../global/config';

const db = getFirestore(app);

const checkoutProduk = {
  async init(data) {
    await this._setDataCheckout(data);
  },

  async getDataCheckOutItem() {
    const userAccess = getUserInfo();
    const q = query(collection(db, 'checkouts'), where('id_user', '==', userAccess.id));
    const docSnap = await getDocs(q);
    return docSnap;
  },
  async getAllDataCheckOutItem() {
    const q = query(collection(db, 'checkouts'));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async _setDataCheckout(data) {
    const dataCheckoutUser = {
      id_produk: data.id,
      id_user: data.id_customer,
      quantity: data.quantity.toString(),
      status: data.status,
      subtotal: data.subtotal.toString(),
      nama_user: data.nama_user,
      newStok: data.newStok,
    };

    await this._createDataCheckout(dataCheckoutUser);
  },

  async _createDataCheckout(data) {
    addClassElement('#btnpay', 'disabled');
    innerElement('#btnpay', 'Mohon Tunggu ..');
    try {
      const nanoid = customAlphabet('1234567890abcdefghjiklmnopqrstuvwxyz', 19);
      const idCheckout = `checkout_${nanoid()}`;
      const date = new Date();
      const userAccess = getUserInfo();
      const dataNew = data;
      dataNew.create_at = date.toISOString();
      dataNew.create_by = userAccess.nama_user;
      await setDoc(doc(db, 'checkouts', idCheckout), dataNew);
      const docRef = doc(db, 'products', dataNew.id_produk);
      await updateDoc(docRef, { stok: dataNew.newStok.toString() });
      removeItemCart(dataNew.id_produk);
      localStorage.removeItem('checkout_item');
      Swal.fire('Pemesanan Berhasil', '', 'success').then((res) => ((res.isConfirmed) ? redirect('#/pesanan') : redirect('#/pesanan')));
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
    } finally {
      removeClassElement('#btnpay', 'disabled');
      innerElement('#btnpay', 'Bayar Sekarang');
    }
  },

  async updateStatusCheckout(data) {
    try {
      const docRef = doc(db, 'checkouts', data.id_checkout);
      await updateDoc(docRef, { status: data.status });
      Swal.fire('Berhasil', '', 'success')
        .then((res) => ((res.isConfirmed) ? window.location.reload() : ''));
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
    }
  },
};

export default checkoutProduk;
