import { addClassElement } from '../../utils/functions';

const Product = {
  async render() {
    return `
            <div class="jumbotron jumbotron-product text-center pt-5 pb-5">
                <h3 class="display-6">Selamat Datang di Product Kami</h3>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-3">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-dark btn-lg" href="#" role="button">Mulai Belanja</a>
            </div>


            <section id="product" class="product section-product bg-secondary pb-4 pt-5">
                <div class="row mb-4">
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">gfjhgk</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                   <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsall</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsaer</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">iugiuwdhyda</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp....</p>
                                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsall</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsaer</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">iugiuwdhyda</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp....</p>
                                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsall</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsaer</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">iugiuwdhyda</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp....</p>
                                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsall</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsaer</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">iugiuwdhyda</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp....</p>
                                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsall</h5>
                                    <small>1 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur. Consequatur.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsaer</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                        <div class="card">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <div class="d-flex justify-content-between">
                                    <h5 class="mb-1">hgkhkdsa</h5>
                                    <small>2 days ago</small>
                                    </div>
                                    <p class="mb-1">Rp100.000,-</p>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
         `;
  },

  async afterRender() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    addClassElement('#product', 'active');
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Product;
