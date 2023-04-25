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
            <span class="d-inline-block text-truncate card-text text-center" style="max-width: 250px;">
            ${resultData.nama_produk}
            </span>
            <h4 class="text-center text-warning mb-3">Rp ${formatRupiah(resultData.harga_produk)}</h4>
            <div class="dropdown">
                <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Selengkapnya
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#/detail/${resultData.id}">Detail</a></li>
                    <li><a class="dropdown-item" href="#">Beli</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

export { trDataProduk, formEditProduk, cardProdukUser };
