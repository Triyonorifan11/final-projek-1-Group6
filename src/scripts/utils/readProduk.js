import {
  query, collection, getFirestore, getDocs, orderBy,
} from 'firebase/firestore';
import app from '../global/config';

const db = getFirestore(app);
const readDataProduk = {
  async init() {
    return this._fetchAllDataProduct();
  },
  async _fetchAllDataProduct() { // digunakan untuk get all product
    const q = query(collection(db, 'products'), orderBy('update_at', 'desc'));
    const docSnap = await getDocs(q);
    return docSnap;
  },
};

export default readDataProduk;
