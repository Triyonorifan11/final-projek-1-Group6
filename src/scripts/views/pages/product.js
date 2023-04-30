import { addClassElement } from '../../utils/functions';
import loader from '../../utils/loader';
import readDataProduk from '../../utils/readProduk';
import { cardProdukUser } from '../../utils/template';

const Product = {
  async render() {
    return `
            <div class="jumbotron jumbotron-product text-center pt-5 pb-5">
                <h3 class="display-6">Selamat Datang di Product Kami</h3>
                <p class="lead">Temukan produk thrifting berkualitas, Ada banyak produk brand terkenal yang dapat anda temukan disini. </p>
                <hr class="my-3">
                <p>Gratis ongkir hingga Rp 15.000 tanpa minimal pembelian</p>
                <a class="btn btn-dark btn-lg" href="#/keranjang" role="button">Mulai Belanja</a>
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
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg ">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Foto Produk</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
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
    dataAllProduk.forEach((doc) => {
      const resultData = doc.data();
      resultData.id = doc.id;
      daftarProduk.innerHTML += cardProdukUser(resultData);
    });
    loading.innerHTML = '';

    const imgshow = document.querySelectorAll('.img-show');
    imgshow.forEach((img) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        const modalbody = document.querySelector('.modal-body');
        const imgSrc = img.getAttribute('data-img');
        modalbody.innerHTML = `
        <div class="d-flex justify-content-center">
          <img src="${imgSrc}" style="height: 450px; width="300px" object-fit:cover; object-position:center;">
        </div>
        `;
      });
    });
  },
};

export default Product;
