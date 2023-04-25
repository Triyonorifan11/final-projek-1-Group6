import { addClassElement } from '../../utils/functions';

const Detail = {
  async render() {
    return `
    <div class="container-fluid container-detail pt-5">
      <div class="container pt-5">
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/src/scripts/views/pages/product.js" style="text-decoration: none;">Product</a></li>
                    <li class="breadcrumb-item">Detail</li>
                    <li class="breadcrumb-item active">Celana</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-lg-4 mb-3">
                    <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid" alt="">
                </div>
                    
                <div class="col-md-6 offset-md-1 col-lg-7 offset-lg-1">
                    <h1>Celana Chinos</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fugit quibusdam praesentium. Asperiores, consequatur hic? Dicta sint quos ea vitae.</p>
                    <h2 class="text-warning">Rp 50.000</h2>
                    <button class="btn btn-outline-warning mt-3">Beli Sekarang</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid py-5 bg-secondary mt-5">
        <div class="container">
            <h2 class="text-center mb-5">Rekomendasi Untuk Anda</h2>

            <div class="row justify-content-center">
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a> 
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-3">
                    <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="img-fluid img-thumbnail" alt="">
                    </a>    
                </div>
            </div>
        </div>
    </div>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
