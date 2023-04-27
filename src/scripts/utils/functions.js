import Swal from 'sweetalert2';
import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';

function flassMesagge(icon, text, title) {
  Swal.fire({
    icon,
    text,
    title,
  });
}

function isLogin() {
  if (localStorage.getItem('user_collexin')) {
    return true;
  }
  return false;
}

function getUserInfo() {
  if (isLogin()) {
    return JSON.parse(localStorage.getItem('user_collexin'));
  }
  return false;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function redirect(page) {
  setTimeout(() => {
    window.location.href = `./${page}`;
  }, 100);
}
function getFilename(file, name) {
  const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
  return `${name}.${extension}`;
}
async function uploadFile(file, name) {
  const storage = getStorage();
  const filename = getFilename(file, name);
  const storageRef = ref(storage, filename);
  const uploadImage = await uploadBytes(storageRef, file);
  return getDownloadURL(uploadImage.ref).then((url) => Promise.resolve(url));
}

function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateTemp = new Date(date);
  return dateTemp.toLocaleDateString('id-ID', options);
}

function formatRupiah(angka) {
  let separator = '.';
  const numberString = angka.replace(/[^,\d]/g, '').toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return rupiah;
}

function addClassElement(element, className) {
  document.querySelector(element).classList.add(className);
}
function removeClassElement(element, className) {
  document.querySelector(element).classList.remove(className);
}
function innerElement(idOrClass, element) {
  document.querySelector(idOrClass).innerHTML = element;
}

function checkForStorage() {
  return typeof (Storage) !== 'undefined';
}

const DATA_CART_USER = 'data_cart_user';
function isExtistItemInCart(id) {
  if (localStorage.getItem(DATA_CART_USER) === null) {
    return false;
  }
  const dataCart = JSON.parse(localStorage.getItem(DATA_CART_USER));
  const result = dataCart.find((dataId) => dataId.id === id);
  if (result !== undefined) return true;
  return false;
}

function getItemCart() {
  if (localStorage.getItem(DATA_CART_USER) === null) {
    return false;
  }
  return JSON.parse(localStorage.getItem(DATA_CART_USER));
}
function getItemCheckout() {
  if (localStorage.getItem('checkout_item') === null) {
    return false;
  }
  return JSON.parse(localStorage.getItem('checkout_item'));
}

function getItemCartById(id) {
  if (isExtistItemInCart(id)) {
    const allItem = getItemCart();
    const newData = allItem.filter((item) => item.id === id);
    return newData;
  }
  return false;
}

function removeItemCart(id) {
  if (isExtistItemInCart(id)) {
    const allItem = getItemCart();
    const newData = allItem.filter((item) => item.id !== id);
    localStorage.setItem(DATA_CART_USER, JSON.stringify(newData));
  } else {
    console.log('Tidak ada item');
  }
}

function putItemToCart(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(DATA_CART_USER) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(DATA_CART_USER));
    }

    historyData.unshift(data);
    localStorage.setItem(DATA_CART_USER, JSON.stringify(historyData));
  }
}

export {
  isLogin,
  getUserInfo,
  escapeHtml,
  redirect,
  uploadFile,
  formatDate,
  formatRupiah,
  flassMesagge,
  addClassElement,
  removeClassElement,
  innerElement,
  putItemToCart,
  isExtistItemInCart,
  getItemCart,
  removeItemCart,
  getItemCartById,
  getItemCheckout,
};
