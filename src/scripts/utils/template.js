import { formatDate, formatRupiah } from './functions';

const trDataProduk = (resultData, index) => `
<tr>
    <th scope="row">${index}</th>
    <td><img src="${resultData.foto_produk}" alt="${resultData.nama_produk}" title="${resultData.nama_produk}" width="100px" style="height:100px; object-fit:cover; object-position:center;" /></td>
    <td>${resultData.nama_produk}</td>
    <td>${formatDate(resultData.update_at)}</td>
    <td>Rp${formatRupiah(resultData.harga_produk)}</td>
    <td>${resultData.stok} ${resultData.kategori_produk}</td>
    <td><a class="btn btn-secondary btn-sm" href="#/edit-produk/${resultData.id}" role="button" title="edit produk"><i class="bi bi-pencil-square"></i></a></td>
</tr>
`;

const formEditProduk = (data) => `
<div class="row">
    <div class="col-md-6">
        <div class="mb-3">
            <label for="nama_produk" class="form-label">Nama produk <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="nama_produk" name="nama_produk" value="${data.nama_produk}" required>
        </div>
        <div class="mb-3">
            <label for="stok" class="form-label">Jumlah Stok <span class="text-danger">*</span></label>
            <input type="number" class="form-control" id="stok" name="stok" value="${data.stok}" required>
        </div>
        <div class="mb-3">
            <label for="deskripsi_produk" class="form-label">Deskripsi <span class="text-danger">*</span></label>
            <textarea class="form-control" id="deskripsi_produk" name="deskripsi_produk" rows="16" required>${data.deskripsi_produk}</textarea>
        </div>
    </div>
    <div class="col-md-6">
        <div class="mb-3">
            <label for="harga_produk" class="form-label">Harga produk <span class="text-danger">*</span></label>
            <div class="input-group mb-3">
                <span class="input-group-text">Rp</span>
                <input type="number" class="form-control" id="harga_produk" name="harga_produk" value="${data.harga_produk}" aria-label="harga produk" required placeholder="15000">
            </div>
        </div>
        <div class="mb-3">
            <label for="jenis_produk" class="form-label">Jenis produk <span class="text-danger">*</span></label>
            <select class="form-select" id="jenis_produk" name="jenis_produk" aria-label="Default select example" required>
                <option selected value="${data.jenis_produk}">${data.jenis_produk}</option>
                <option value="Anak-anak">Anak-anak</option>
                <option value="Dewasa">Dewasa</option>
                <option value="Remaja">Remaja</option>
                <option value="Bayi">Bayi</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="kategori_produk" class="form-label">Kategori produk <span class="text-danger">*</span></label>
            <select class="form-select" id="kategori_produk" name="kategori_produk" aria-label="Default select example" required>
                <option selected value="${data.kategori_produk}">${data.kategori_produk}</option>
                <option value="Baju">Baju</option>
                <option value="Celana">Celana</option>
                <option value="Tas/Ransel">Tas/Ransel</option>
                <option value="Lainnya">Lainnya</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="gambar_produk" class="form-label">Gambar produk <span class="text-danger">*</span></label>
            <input type="file" class="form-control d-none" id="gambar_produk" name="gambar_produk" accept="image/*">
            <div class="position-relative" id="cover-image">
                <img src="${data.foto_produk}" id="img-thumb" class="rounded" alt="${data.nama_produk}" title="${data.nama_produk}" width="100%" style="height:310px; object-fit:cover; object-position:center;"  />
                <div class="cover-img rounded">
                    <div class="text-cover">
                        <i class="bi bi-camera"></i>
                        <span>Ganti gambar</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-warning" id="btnSave">Update data</button>
        <button type="button" class="btn btn-danger ms-1" id="btnDelete">Delete data</button>
    </div>
</div>
`;

const cardProdukUser = (resultData) => `
<div class="col-sm-6 col-lg-3 mb-3">
    <div class="card">
        <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
            <img src="${resultData.foto_produk}" class="card-img-top" alt="${resultData.nama_produk}" title="${resultData.nama_produk}" style="height: 250px; object-fit:cover; object-position:center;">
        </a>    
        <div class="card-body">
            <h5 class="card-title text-center text-warning text-truncate"><strong>${resultData.nama_produk}</strong></h5>
            <span class="d-inline-block text-truncate card-text text-center" style="max-width: 200px;">
            ${resultData.deskripsi_produk}
            </span>
            <h4 class="text-center text-warning mb-3">Rp ${formatRupiah(resultData.harga_produk)}</h4>
            <a class="btn btn-warning" href="#/detail/${resultData.id}" title="Detail produk">Detail</a>
            <span class="ms-auto">Stok : ${resultData.stok}</span>
        </div>
    </div>
</div>
`;

const detailProdukUser = (resultData) => `
<div class="container">
    <div class="row">
        <div class="col-md-5 col-lg-4 mb-3">
            <img src="${resultData.foto_produk}" class="img-fluid" alt="${resultData.nama_produk}" title="${resultData.nama_produk}">
        </div>
            
        <div class="col-md-6 offset-md-1 col-lg-7 offset-lg-1">
            <h1>${resultData.nama_produk}</h1>
            <p>${resultData.deskripsi_produk}</p>
            <h2 class="text-warning">Rp ${formatRupiah(resultData.harga_produk)}</h2>
            <div class="d-flex">
                <div class="wrapper mt-3">
                    <span class="minus">-</span>
                    <span class="num">1</span>
                    <span class="plus">+</span>
                </div>
                <span class="badge bg-secondary fs-6 mt-3 ms-3">Tersedia : ${resultData.stok}</span>
            </div>
            <div class="d-flex my-4">
                <button class="btn btn-warning me-3" title="checkout" id="addCheckout">Beli Sekarang</button>
                <button class="btn btn-outline-warning" id="addtocart" data-name="${resultData.nama_produk}" data-idProduk="${resultData.id}" title="Tambah ke keranjang"><i class="bi bi-cart"></i></button>
            </div>
        </div>
    </div>
</div>
`;

const tblRowKeranjang = (data) => `
<tr>
    <td>
        <div class="card-info">
            <img src="${data.foto_produk}" style="height: 150px; object-fit:cover; object-position:center;" alt="">
            <div>
                <p>${data.nama_produk}</p>
                <small>Harga : Rp ${formatRupiah(data.harga_produk)}</small>
                <br>
                <button class="btn-sm btn btn-danger btnRemove" data-idProduk="${data.id}" data-namaProduk="${data.nama_produk}"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </td>
    <td><input type="number" class="form-control" value="${data.quantity}" readonly></td>
    <td>Rp ${formatRupiah(data.subtotal.toString())}</td>
    <td><button data-idProduk="${data.id}" class="btn btn-warning mt-3 checkout-product" data-namaProduk="${data.nama_produk}">Checkout</button></td>
</tr>
`;

const cardCheckoutPembayaran = (resultData) => `
<div class="card border-0 shadow-sm">
    <div class="card-body p-4">
        <h3>Checkout Pembayaran</h3>
        <div class="row py-4">
            <div class="col-md-6">
                <img src="${resultData.foto_produk}" class="img-fluid rounded" style="height: 350px; width:100%; object-fit:cover; object-position: center;" alt="${resultData.nama_produk}" title="${resultData.nama_produk}">
            </div>    
            <div class="col-md-6">
                <div class="d-flex justify-content-between">
                    <span class="fw-bold">Nama Produk</span>
                    <p>${resultData.nama_produk}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="fw-bold">Harga Produk</span>
                    <p>Rp ${formatRupiah(resultData.harga_produk)}</p>
                </div>
                <div class="mb-1">
                    <span class="fw-bold">Deskripsi Produk</span>
                    <p>${resultData.deskripsi_produk}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="fw-bold">Jumlah Beli</span>
                    <p>${resultData.quantity}</p>
                </div>
                <div class="d-flex justify-content-between bg-light p-2 mb-2 rounded">
                    <span class="fw-bold">Total Beli</span>
                    <span class="text-warning">Rp ${formatRupiah(resultData.subtotal.toString())}</span>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-warning" type="button" id="btnpay">Bayar Sekarang</button>
                </div>
            </div>    
        </div>
    </div>
</div>
`;

const tblrowCPesanan = (data, i) => `
<tr>
    <td scope="col">${i}</td>
    <td scope="col"><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.id_produk}" class="data-modal text-link link-underline link-underline-opacity-0">${data.id_produk}</a></td>
    <td scope="col">${data.quantity}</td>
    <td scope="col">Rp ${formatRupiah(data.subtotal)}</td>
    <td scope="col"><span class="badge  ${data.bedge} text-capitalize">${data.status}</span></td>
</tr>
`;
const tblrowDaftarCO = (data, i) => `
<tr>
    <td scope="col">${i}</td>
    <td scope="col"><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.id_produk}" class="data-modal text-link link-underline link-underline-opacity-0">${data.id_produk}</a></td>
    <td scope="col">${data.quantity}</td>
    <td scope="col"><span class="badge ${data.bedge} text-capitalize">${data.status}</span></th>
    <td scope="col">
        <button class="btn btn-secondary btn-sm btn-kemas" title="Kemas produk"><i class="bi bi-box-seam-fill"></i></button>
        <button class="btn btn-warning btn-sm btn-kirim" title="Kirim produk"><i class="bi bi-send-check"></i></button>
    </td>
</tr>
`;

const modalBodyPesanan = (resultData) => `
<div class="row">
        <div class="col-md-5 col-lg-4 mb-3">
            <img src="${resultData.foto_produk}" class="img-fluid" alt="${resultData.nama_produk}" title="${resultData.nama_produk}">
        </div>
            
        <div class="col-md-6 offset-md-1 col-lg-7 offset-lg-1">
            <h1>${resultData.nama_produk}</h1>
            <p>${resultData.deskripsi_produk}</p>
            <h2 class="text-warning">Rp ${formatRupiah(resultData.harga_produk)}</h2>
            <span class="badge bg-secondary fs-6 mt-3 ms-3">Tersedia : ${resultData.stok}</span>
        </div>
    </div>
`;

export {
  trDataProduk,
  formEditProduk,
  cardProdukUser,
  detailProdukUser,
  tblRowKeranjang,
  cardCheckoutPembayaran,
  tblrowCPesanan,
  tblrowDaftarCO,
  modalBodyPesanan,
};
