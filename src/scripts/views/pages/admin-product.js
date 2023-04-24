/* eslint-disable no-undef */
import { addClassElement, getUserInfo, redirect } from '../../utils/functions';
import readDataProduk from '../../utils/readProduk';

const adminProduk = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary" style="height: 100vh">
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
                                            <th scope="col">Gambar</th>
                                            <th scope="col">Nama Produk</th>
                                            <th scope="col">Diperbarui Pada</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Stok</th>
                                            <th scope="col" class="no-sort">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="data-produk">
                                    </tbody>
                                </table>
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
      }
    }
    document.querySelectorAll('.aside-link').forEach((link) => {
      link.classList.remove('btn-warning');
    });
    addClassElement('#myProduct', 'btn-warning');

    const dataAllProduk = await readDataProduk.init();
    const tbdataProduk = document.getElementById('data-produk');
    console.log(dataAllProduk);
    let i = 0;
    dataAllProduk.forEach((doc) => {
      const resultData = doc.data();
      resultData.id = doc.id;
      tbdataProduk.innerHTML = `
        <tr>
            <th scope="row">${i}</th>
            <td>${resultData.foto_produk}</td>
            <td>${resultData.nama_produk}</td>
            <td>${resultData.update_at}</td>
            <td>${resultData.harga_produk}</td>
            <td>${resultData.stok}</td>
            <td>Edit</td>
        </tr>
      `;
    });

    $('#data-produk').DataTable({
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default adminProduk;
