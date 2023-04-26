import UrlParser from '../../routes/url-parser';
import editProduct from '../../utils/editProduk';
import {
  addClassElement, flassMesagge, getUserInfo, innerElement, isExtistItemInCart, putItemToCart,
} from '../../utils/functions';
import loader from '../../utils/loader';
import { detailProdukUser } from '../../utils/template';

const Detail = {
  async render() {
    return `
    <div class="container-fluid container-detail">
      <div class="container pt-5">
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#/product" style="text-decoration: none;">Product</a></li>
                    <li class="breadcrumb-item">Detail</li>
                    <li class="breadcrumb-item active" id="kategori">Celana</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="container-fluid" id="data_detail_produk">
    </div>

    <div class="container-fluid py-5 bg-secondary mt-5">
        <div class="container">
            <h2 class="text-center mb-5">Rekomendasi Untuk Anda</h2>

            <div class="row justify-content-center">
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a> 
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
            </div>
        </div>
    </div>
       `;
  },

  async afterRender() {
    const userAccess = getUserInfo();
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    addClassElement('#product', 'active');

    const templateDetailProduk = document.getElementById('data_detail_produk');
    templateDetailProduk.innerHTML = loader();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataProdukById = await editProduct.init(url.id);
    dataProdukById.id = url.id;
    templateDetailProduk.innerHTML = detailProdukUser(dataProdukById);
    innerElement('#kategori', dataProdukById.kategori_produk);

    const addCheckout = document.getElementById('addCheckout');
    const addtocart = document.getElementById('addtocart');
    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const num = document.querySelector('.num');

    let a = 1;

    plus.addEventListener('click', () => {
      a += 1;
      num.innerText = a;
    });

    minus.addEventListener('click', () => {
      if (a > 1) {
        a -= 1;
        num.innerText = a;
      }
    });

    if (userAccess.role === 'admin' || isExtistItemInCart(dataProdukById.id)) {
      addClassElement('#addCheckout', 'disabled');
      addClassElement('#addtocart', 'disabled');
    }

    addtocart.addEventListener('click', (e) => {
      if (!userAccess) {
        e.preventDefault();
        flassMesagge('warning', 'Harap login untuk tambah ke keranjang!', 'Perhatian');
      } else {
        dataProdukById.quantity = a;
        dataProdukById.subtotal = Math.floor(dataProdukById.harga_produk) * a;
        putItemToCart(dataProdukById);
        flassMesagge('success', 'Berhasil tambah keranjang', 'Berhasil!');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });

    addCheckout.addEventListener('click', (e) => {
      if (!userAccess) {
        e.preventDefault();
        flassMesagge('warning', 'Harap login untuk beli!', 'Perhatian');
      }
    });
  },
};

export default Detail;
