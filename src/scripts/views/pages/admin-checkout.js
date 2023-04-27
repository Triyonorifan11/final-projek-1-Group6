/* eslint-disable no-undef */
import checkoutProduk from '../../utils/checkoutProduk';
import editProduct from '../../utils/editProduk';
import { addClassElement, getUserInfo, redirect } from '../../utils/functions';
import loader from '../../utils/loader';
import { modalBodyPesanan, tblrowDaftarCO } from '../../utils/template';

const adminCheckout = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary">
            <div class="d-flex justify-content-between">
                <h3>Daftar Checkout</h3>
            </div>
            <div class="row py-3">
                <div class="col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="table-responsive px-2 py-4">
                                <table class="table table-hover table-striped table-sm" id="data-produk">
                                    <thead class="table-dark">
                                      <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Produk</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" class="no-sort">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id="dataAll">
                                    </tbody>
                                </table>
                                <div id="loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div
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
    </section>
    `;
  },

  async afterRender() {
    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'admin') {
        redirect('#/');
      } else {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
        });
        document.querySelectorAll('.aside-link').forEach((link) => {
          link.classList.remove('btn-warning');
        });
        addClassElement('#admincheckout', 'btn-warning');
        const tbody = document.querySelector('tbody');
        const loading = document.getElementById('loading');
        loading.innerHTML = loader();
        const mychekout = await checkoutProduk.getAllDataCheckOutItem();
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
          tbody.innerHTML += tblrowDaftarCO(result, i);
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

        const btnKemas = document.querySelectorAll('.btn-kemas');
        btnKemas.forEach((btnkemas) => {
          btnkemas.addEventListener('click', async (e) => {
            e.preventDefault();
            const idCheckout = btnkemas.getAttribute('data-idCheckout');
            const idProduk = btnkemas.getAttribute('data-idProduk');
            Swal.fire({
              icon: 'question',
              title: `Kemas Item ${idProduk}?`,
              showCancelButton: true,
              confirmButtonText: 'Kemas',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                const payloadUpdate = {
                  id_checkout: idCheckout,
                  status: 'dikemas',
                };
                checkoutProduk.updateStatusCheckout(payloadUpdate);
              }
            });
          });
        });

        const btnKirim = document.querySelectorAll('.btn-kirim');
        btnKirim.forEach((btnkirim) => {
          btnkirim.addEventListener('click', async (e) => {
            e.preventDefault();
            const idCheckout = btnkirim.getAttribute('data-idCheckout');
            const idProduk = btnkirim.getAttribute('data-idProduk');
            Swal.fire({
              icon: 'question',
              title: `Kirim Item ${idProduk}?`,
              showCancelButton: true,
              confirmButtonText: 'Kirim',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                const payloadUpdate = {
                  id_checkout: idCheckout,
                  status: 'dikirim',
                };
                checkoutProduk.updateStatusCheckout(payloadUpdate);
              }
            });
          });
        });

        $('#data-produk').DataTable({
          lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
          columnDefs: [{
            targets: 'no-sort',
            orderable: false,
          }],
        });
      }
    } else {
      redirect('#/');
    }
  },
};

export default adminCheckout;
