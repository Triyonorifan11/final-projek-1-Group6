import { collection, getCountFromServer, getFirestore } from 'firebase/firestore';
import app from '../global/config';

const db = getFirestore(app);

const dashboardAdmin = {
  async init() {
    return this._countAllData();
  },

  async _countAllData() {
    const dataDashboard = {};
    const collProduct = collection(db, 'products');
    const collCheckout = collection(db, 'checkouts');
    const collUser = collection(db, 'users');
    const countProduct = await getCountFromServer(collProduct);
    const countCheckout = await getCountFromServer(collCheckout);
    const countUser = await getCountFromServer(collUser);
    dataDashboard.countProduct = countProduct.data().count;
    dataDashboard.countCheckout = countCheckout.data().count;
    dataDashboard.countUser = countUser.data().count;
    return dataDashboard;
  },
};

export default dashboardAdmin;
