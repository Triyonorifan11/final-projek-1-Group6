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
                    <div class="col-12">
                        <h2 class="text-center mb-5">Semua Produk</h2>
                        <div class="row">
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-3">
                                <div class="card">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" data-lighbox="celana-chinos" data-title="celana chinos">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" class="card-img-top" alt="...">
                                    </a>    
                                    <div class="card-body">
                                        <h5 class="card-title text-center text-warning"><strong>Celana</strong></h5>
                                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <h4 class="text-center text-warning mb-3">Rp 50.000</h4>
                                        <div class="dropdown">
                                            <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Selengkapnya
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#detail.js">Detail</a></li>
                                                <li><a class="dropdown-item" href="#">Beli</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
