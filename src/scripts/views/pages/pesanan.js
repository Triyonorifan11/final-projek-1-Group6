import Swal from 'sweetalert2';
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
        <div class="container">
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body">
              <div class="table-responsive bg-light">
                <table class="table table-striped table-hover">
                  <thead class="bg-warning">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Produk</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
                <div id="loading"></div>
              </div>
            </div>
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
          if (result.status === 'diminta') {
            result.bedge = 'text-bg-primary';
          } else if (result.status === 'dikemas') {
            result.bedge = 'text-bg-secondary';
          } else if (result.status === 'dikirim') {
            result.bedge = 'text-bg-warning';
          } else if (result.status === 'terkirim') {
            result.bedge = 'text-bg-success';
          }
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

        const btnTerima = document.querySelectorAll('.btn-terima');
        btnTerima.forEach((btnterima) => {
          btnterima.addEventListener('click', async (e) => {
            e.preventDefault();
            const idCheckout = btnterima.getAttribute('data-idCheckout');
            const idProduk = btnterima.getAttribute('data-idProduk');
            Swal.fire({
              icon: 'question',
              title: `Item ${idProduk} sudah diterima?`,
              showCancelButton: true,
              confirmButtonText: 'Ya, diterima',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                const payloadUpdate = {
                  id_checkout: idCheckout,
                  status: 'terkirim',
                };
                checkoutProduk.updateStatusCheckout(payloadUpdate);
              }
            });
          });
        });
      }
    } else {
      redirect('#/');
    }

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Pesanan;
