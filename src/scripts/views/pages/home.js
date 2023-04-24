import { addClassElement } from '../../utils/functions';

const Home = {
  async render() {
    return `
    <div id="carouselExampleCaptions" class="carousel slide" ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/home/3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Product Brand Terkenal</h5>
              <p>Anda bisa menemukan barang brand luar yang cocok untuk style anda</p>
              <p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div class="carousel-item active">
            <img src="/img/home/2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Tapi Keren</h5>
              <p>Ada banyak produk yang bisa anda temukan disini</p>
              <p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div class="carousel-item active">
            <img src="/img/home/1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>ColexxiIn Nih</h5>
              <p>Toko online thrifting terbaik di Indonesia</p>
              <p><a href="#" class="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>


    <section id="deskripsi" class="deskripsi section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="deskripsi-img">
                        <img src="/img/home/4.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="deskripsi-text">
                        <h2>We Product Best Quality</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore veniam reprehenderit error maxime eveniet rem porro in, doloremque repellat repudiandae sequi autem, deleniti et distinctio necessitatibus eius deserunt odio. Impedit molestias ea sunt, optio ratione laboriosam ipsam, quia corporis quisquam possimus inventore quidem quod. Magni facere neque totam ad.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="container-fluid container-services bg-secondary py-5">
        <div class="container">
            <h2 class="text-light text-center mb-5">Kami Melayani</h2>

            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                    <div class="d-flex justify-content-center">
                        <div class="icon-services d-flex align-items-center justify-content-center">
                            <i class="bi bi-cash display-6"></i>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-center">
                        <h5>Cast on Delivery</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ab quia quam deserunt exercitationem vitae.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                    <div class="d-flex justify-content-center">
                        <div class="icon-services d-flex align-items-center justify-content-center">
                            <i class="bi bi-credit-card display-6"></i>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-center">
                        <h5>Payment Gateway</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ab quia quam deserunt exercitationem vitae.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3 hovered-card mb-3">
                    <div class="d-flex justify-content-center">
                        <div class="icon-services d-flex align-items-center justify-content-center">
                            <i class="bi bi-wallet2 display-6"></i>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-center">
                        <h5>Pay Later</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ab quia quam deserunt exercitationem vitae.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section id="home-product" class="home-product section-padding center">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header pb-5">
                        <h2>Produk Kami</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius fuga, voluptate perspiciatis corporis accusamus!</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="card text-light text-center bg-white pb-2">
                        <div class="card-body text-dark">
                            <div class="img-area mb-4">
                                <img src="/img/home/baju.jpg" alt="" class="img-fluid">
                            </div>
                            <h3 class="card-title">Kaos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in nulla possimus debitis quis ab amet omnis aspernatur aliquid hic?</p>
                            <button class="btn bg-warning text-dark">Kunjungi</button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-3">
                    <div class="card text-light text-center bg-white pb-2">
                        <div class="card-body text-dark">
                            <div class="img-area mb-4">
                                <img src="/img/home/celana.jpg" alt="" class="img-fluid">
                            </div>
                            <h3 class="card-title">Celana</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in nulla possimus debitis quis ab amet omnis aspernatur aliquid hic?</p>
                            <button class="btn bg-warning text-dark">Kunjungi</button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-3">
                    <div class="card text-light text-center bg-white pb-2">
                        <div class="card-body text-dark">
                            <div class="img-area mb-4">
                                <img src="/img/home/jaket.jpg" alt="" class="img-fluid">
                            </div>
                            <h3 class="card-title">Jaket</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in nulla possimus debitis quis ab amet omnis aspernatur aliquid hic?</p>
                            <button class="btn bg-warning text-dark">Kunjungi</button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-3">
                    <div class="card text-light text-center bg-white pb-2">
                        <div class="card-body text-dark">
                            <div class="img-area mb-4">
                                <img src="/img/home/sepatu.jpg" alt="" class="img-fluid">
                            </div>
                            <h3 class="card-title">Sepatu</h3>
                            <p>Lorem ipsum dolor Losem isut amet dumb sit amet consectetur adipisicing elit. Eum in nulla possimus debitis quis ab amet omnis aspernatur aliquid hic?</p>
                            <button class="btn bg-warning text-dark">Kunjungi</button>
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
    addClassElement('#home', 'active');
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
