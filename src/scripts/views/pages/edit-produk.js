import editProduct from '../../utils/editProduk';
import { formatDate, getUserInfo, redirect } from '../../utils/functions';
import UrlParser from '../../routes/url-parser';
import { formEditProduk } from '../../utils/template';
import loader from '../../utils/loader';

const editProduk = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary">
            <div class="d-flex justify-content-between">
                <h3>Update New Produk</h3>
            </div>
            <div class="row py-3">
                <div class="col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold mb-4">Update Produk</h6>
                            <form id="edit-produk" enctype="multipart/form-data">
                                
                            </form>
                            <div>
                                <p>Diedit oleh <span id="update_by" class="text-warning"></span>, at <span id="update_at"></span></p>
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
        const updateby = document.querySelector('#update_by');
        const updateat = document.querySelector('#update_at');
        const formEdit = document.getElementById('edit-produk');
        formEdit.innerHTML = loader();

        const url = UrlParser.parseActiveUrlWithoutCombiner();

        // Fungsi ini akan dipanggil setelah render()
        const dataProdukById = await editProduct.init(url.id);
        updateby.innerHTML = dataProdukById.update_by;
        updateat.innerHTML = formatDate(dataProdukById.update_at);
        dataProdukById.id = url.id;
        formEdit.innerHTML = formEditProduk(dataProdukById);
        await editProduct.updateDataProduk(dataProdukById);
      }
    } else {
      redirect('#/');
    }
  },
};

export default editProduk;
