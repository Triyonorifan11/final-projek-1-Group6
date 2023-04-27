import {
  addClassElement, getUserInfo, redirect,
} from '../../utils/functions';
import { modalBodyPesanan, tblrowCPesanan } from '../../utils/template';
import checkoutProduk from '../../utils/checkoutProduk';
import editProduct from '../../utils/editProduk';
import loader from '../../utils/loader';

const Pesanan = {
  async render() {
    return `
      <h1 class="text-center pt-5">Daftar Pesanan Anda</h1>
        <div class="small-container card-keranjang">
            <div class="table-responsive">
              <table class="table">
                <thead class="table-warning">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Produk</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <div id="loading"></div>
            </div>
            
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Produk</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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

    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'customer') {
        redirect('#/');
      } else {
        const tbody = document.querySelector('tbody');
        addClassElement('#keranjang', 'active');
        const loading = document.getElementById('loading');
        loading.innerHTML = loader();
        const mychekout = await checkoutProduk.getDataCheckOutItem();
        let i = 0;
        mychekout.forEach((doc) => {
          i += 1;
          const result = doc.data();
          result.id = doc.id;
          tbody.innerHTML += tblrowCPesanan(result, i);
        });
        loading.innerHTML = '';

        const datamodal = document.querySelectorAll('.data-modal');
        const modalBody = document.querySelector('.modal-body');
        datamodal.forEach((dtl) => {
          dtl.addEventListener('click', async (e) => {
            modalBody.innerHTML = loader();
            const idProduk = dtl.getAttribute('data-id');
            e.preventDefault();
            const dataProdukById = await editProduct.init(idProduk);
            modalBody.innerHTML = modalBodyPesanan(dataProdukById);
          });
        });
      }
    }

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Pesanan;
