import addProduk from '../../utils/addProduk';
import { formatDate, getUserInfo, redirect } from '../../utils/functions';

const formProduk = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary">
            <div class="d-flex justify-content-between">
                <h3>Create New Produk</h3>
            </div>
            <div class="row py-3">
                <div class="col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <h6 class="text-danger fw-bold mb-4">New Produk</h6>
                            <form id="new-produk" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="nama_produk" class="form-label">Nama produk <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="nama_produk" name="nama_produk" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="stok" class="form-label">Jumlah Stok <span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="stok" name="stok" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="deskripsi_produk" class="form-label">Deskripsi <span class="text-danger">*</span></label>
                                            <textarea class="form-control" id="deskripsi_produk" name="deskripsi_produk" rows="5" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="harga_produk" class="form-label">Harga produk <span class="text-danger">*</span></label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text">Rp</span>
                                                <input type="text" class="form-control" id="harga_produk" name="harga_produk" aria-label="harga produk" required>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="jenis_produk" class="form-label">Jenis produk <span class="text-danger">*</span></label>
                                            <select class="form-select" id="jenis_produk" name="jenis_produk" aria-label="Default select example" required>
                                                <option selected disabled>Pilih jenis</option>
                                                <option value="Anak-anak">Anak-anak</option>
                                                <option value="Dewasa">Dewasa</option>
                                                <option value="Remaja">Remaja</option>
                                                <option value="Bayi">Bayi</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="kategori_produk" class="form-label">Jenis produk <span class="text-danger">*</span></label>
                                            <select class="form-select" id="kategori_produk" name="kategori_produk" aria-label="Default select example" required>
                                                <option selected disabled>Pilih jenis</option>
                                                <option value="Baju">Baju</option>
                                                <option value="Celana">Celana</option>
                                                <option value="Tas/Ransel">Tas/Ransel</option>
                                                <option value="Lainnya">Lainnya</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="gambar_produk" class="form-label">Gambar produk <span class="text-danger">*</span></label>
                                            <input type="file" class="form-control" id="gambar_produk" name="gambar_produk" required accept="image/*">
                                        </div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-warning mb-3" id="btnSave">Save data</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <p>Dibuat oleh <span id="update_by" class="text-warning"></span>, at <span id="update_at"></span></p>
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
    const updateby = document.querySelector('#update_by');
    const updateat = document.querySelector('#update_at');
    updateby.innerHTML = userAccess.nama_user;
    updateat.innerHTML = formatDate(new Date());
    // Fungsi ini akan dipanggil setelah render()
    await addProduk.init();
  },
};

export default formProduk;
