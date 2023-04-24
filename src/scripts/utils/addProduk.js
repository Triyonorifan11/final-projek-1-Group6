import { customAlphabet } from 'nanoid';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import {
  flassMesagge, getUserInfo, redirect, uploadFile,
} from './functions';
import app from '../global/config';

const db = getFirestore(app);
const addProduk = {
  async init() {
    this._getDataForm();
  },

  async _getDataForm() {
    const formNewProduk = document.getElementById('new-produk');
    const btnSave = document.getElementById('btnSave');
    const gambarProduk = document.getElementById('gambar_produk');

    gambarProduk.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileimage = e.target.files[0];
      if (fileimage.size > 1000000) {
        flassMesagge('warning', 'Gambar terlalu besar \n Gambar harus < 1 Mb', 'Perhatian');
        gambarProduk.value = '';
      }
    });

    formNewProduk.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnSave.classList.add('disabled');
      btnSave.innerHTML = 'Tunggu ...';
      const mydataForm = new FormData(e.target);
      const dataNewProduk = {};
      mydataForm.forEach((value, key) => {
        (dataNewProduk[key] = value);
      });
      const nanoid = customAlphabet('1234567890abcdefghjiklmnopqrstuvwxyz', 19);
      const idProduk = `product_${nanoid()}`;
      await uploadFile(dataNewProduk.gambar_produk, `products/${idProduk}`).then((url) => {
        dataNewProduk.foto_produk = url;
      });
      await this._createDataProduk(dataNewProduk, idProduk);
    });
  },

  async _createDataProduk(data, id) {
    const date = new Date();
    const userAccess = getUserInfo();
    try {
      const dataNew = data;
      dataNew.create_at = date;
      dataNew.create_by = userAccess.nama_user;
      dataNew.update_at = date;
      dataNew.update_by = userAccess.nama_user;
      delete dataNew.gambar_produk;
      await setDoc(doc(db, 'products', id), dataNew);
      flassMesagge('success', 'Tambah data produk berhasil!', 'Berhasil!');
      redirect('#/my-product');
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
      const btnSave = document.getElementById('btnSave');
      btnSave.classList.remove('disabled');
      btnSave.innerHTML = 'Save data';
    } finally {
      const btnSave = document.getElementById('btnSave');
      btnSave.classList.remove('disabled');
      btnSave.innerHTML = 'Save data';
    }
  },
};

export default addProduk;
