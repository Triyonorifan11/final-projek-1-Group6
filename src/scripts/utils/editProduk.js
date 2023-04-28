/* eslint-disable no-undef */
import {
  collection,
  deleteDoc,
  doc, getDoc, getDocs, getFirestore, query, updateDoc, where,
} from 'firebase/firestore';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import Swal from 'sweetalert2';
import {
  escapeHtml,
  flassMesagge, getUserInfo, redirect, uploadFile,
} from './functions';
import app from '../global/config';

const db = getFirestore(app);
const dataNewProduk = {};
const editProduct = {
  async init(id) {
    return this._getDataById(id);
  },

  async _deleteFileproduct(url) {
    const storage = getStorage();
    const desertRef = ref(storage, url);
    try {
      await deleteObject(desertRef);
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
    }
  },

  async updateDataProduk(data) {
    const editProduk = document.getElementById('edit-produk');
    const btnSave = document.getElementById('btnSave');
    const gambarProduk = document.getElementById('gambar_produk');
    const imgthumb = document.getElementById('img-thumb');
    const btnDelete = document.getElementById('btnDelete');

    $('#cover-image').click(() => {
      $('#gambar_produk').click();
    });

    // untuk update gambar saat diganti
    gambarProduk.value = '';
    gambarProduk.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileimage = e.target.files[0];
      if (fileimage.size > 1000000) {
        flassMesagge('warning', 'Gambar terlalu besar \n Gambar harus < 1 Mb', 'Perhatian');
        gambarProduk.value = '';
      }
      Swal.fire({
        icon: 'question',
        title: `Update gambar ${data.nama_produk}?`,
        showCancelButton: true,
        confirmButtonText: 'Ya',
        confirmButtonColor: '#ffc107',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this._deleteFileproduct(data.foto_produk);
          uploadFile(fileimage, `products/${data.id}`).then((url) => {
            dataNewProduk.foto_produk = url;
            imgthumb.setAttribute('src', url);
          });
          flassMesagge('success', 'Berhasil ganti gambar!', 'Berhasil!');
        } else {
          gambarProduk.value = '';
        }
      });
    });

    // untuk update semua
    editProduk.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnSave.classList.add('disabled');
      btnSave.innerHTML = 'Tunggu ...';
      const mydataForm = new FormData(e.target);
      mydataForm.forEach((value, key) => {
        if (key === 'gambar_produk') {
          (dataNewProduk[key] = value);
        } else {
          (dataNewProduk[key] = escapeHtml(value.toString()));
        }
      });
      dataNewProduk.id = data.id;
      await this._updateDataProduk(dataNewProduk);
    });

    btnDelete.addEventListener('click', (e) => {
      e.preventDefault();
      Swal.fire({
        icon: 'question',
        title: `Delete data ${data.nama_produk}?`,
        showCancelButton: true,
        confirmButtonText: 'Ya',
        confirmButtonColor: '#ffc107',
      }).then((result) => {
        if (result.isConfirmed) {
          this._deleteFileproduct(data.foto_produk);
          this._getDataCheckoutByIdProduk(data.id);
          this._deleteDataProduk(data.id);
        } else {
          gambarProduk.value = '';
        }
      });
    });
  },

  //   mengubah pada database
  async _updateDataProduk(data) {
    const date = new Date();
    const userAccess = getUserInfo();
    try {
      const dataNew = data;
      dataNew.update_at = date.toISOString();
      dataNew.update_by = userAccess.nama_user;
      delete dataNew.gambar_produk;
      const docRef = doc(db, 'products', dataNew.id);
      await updateDoc(docRef, dataNew);
      flassMesagge('success', 'Update data produk berhasil!', 'Berhasil!');
      redirect('#/my-product');
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
      const btnSave = document.getElementById('btnSave');
      btnSave.classList.remove('disabled');
      btnSave.innerHTML = 'Update data';
    } finally {
      const btnSave = document.getElementById('btnSave');
      btnSave.classList.remove('disabled');
      btnSave.innerHTML = 'Update data';
    }
  },

  async _deleteDataProduk(id) {
    try {
      await deleteDoc(doc(db, 'products', id));
      flassMesagge('success', 'Delete data produk berhasil!', 'Berhasil!');
      redirect('#/my-product');
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
    }
  },

  async _getDataById(id) {
    const getId = id;

    const docRef = doc(db, 'products', `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },

  async _getDataCheckoutByIdProduk(id) {
    const getId = id;
    const q = query(collection(db, 'checkouts'), where('id_produk', '==', getId));
    let checkoutData;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((dCO) => {
      checkoutData = dCO.data();
      checkoutData.id_checkout = dCO.id;
      // doc.data() is never undefined for query doc snapshots
    });
    await this._deleteDataCheckOutById(checkoutData.id_checkout);
  },

  async _deleteDataCheckOutById(id) {
    try {
      await deleteDoc(doc(db, 'checkouts', id));
    } catch (error) {
      flassMesagge('error', `Error= ${error}`, 'Gagal!');
    }
  },

};

export default editProduct;
