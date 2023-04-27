/* eslint-disable no-undef */
import { addClassElement, getUserInfo, redirect } from '../../utils/functions';
import loader from '../../utils/loader';
import readDataProduk from '../../utils/readProduk';
import { trDataProduk } from '../../utils/template';

const adminProduk = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary">
            <div class="d-flex justify-content-between">
                <h3>Daftar Produk</h3>
                <a class="btn btn-warning" href="#/form-produk" role="button">Create New</a>
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
                                            <th scope="col" class="no-sort">Gambar</th>
                                            <th scope="col">Nama Produk</th>
                                            <th scope="col">Diperbarui Pada</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Stok</th>
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
        addClassElement('#myProduct', 'btn-warning');
        const loading = document.getElementById('loading');
        loading.innerHTML = loader();
        const dataAllProduk = await readDataProduk.init();
        const tbdataProduk = document.getElementById('dataAll');
        let i = 0;
        dataAllProduk.forEach((doc) => {
          const resultData = doc.data();
          resultData.id = doc.id;
          i += 1;
          tbdataProduk.innerHTML += trDataProduk(resultData, i);
        });
        loading.innerHTML = '';

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

export default adminProduk;
