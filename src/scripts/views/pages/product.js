import { addClassElement } from '../../utils/functions';
import loader from '../../utils/loader';
import readDataProduk from '../../utils/readProduk';
import { cardProdukUser } from '../../utils/template';

const Product = {
  async render() {
    return `
            <div class="jumbotron jumbotron-product text-center pt-5 pb-5">
                <h3 class="display-6">Selamat Datang di Product Kami</h3>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-3">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-dark btn-lg" href="#/product" role="button">Mulai Belanja</a>
            </div>


            <div id="product" class="container-fluid container-product bg-secondary pb-4 pt-5 py-5">
                <div class="container">    
                    <div class="row">
                        <div class="col-md-11 col-lg-12">
                            <h2 class="text-center mb-5 text-white">Semua Produk</h2>
                            <div id="loading"></div>
                            <div class="row" id="daftar_produk">
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
         `;
  },

  async afterRender() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    addClassElement('#product', 'active');
    const daftarProduk = document.getElementById('daftar_produk');
    const loading = document.getElementById('loading');
    loading.innerHTML = loader();
    const dataAllProduk = await readDataProduk.init();
    let i = 0;
    dataAllProduk.forEach((doc) => {
      const resultData = doc.data();
      resultData.id = doc.id;
      i += 1;
      daftarProduk.innerHTML += cardProdukUser(resultData);
    });
    loading.innerHTML = '';
  },
};

export default Product;
