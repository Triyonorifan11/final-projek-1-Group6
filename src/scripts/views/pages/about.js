import { addClassElement } from '../../utils/functions';

const About = {
    async render() {
      return `
      <section id="about" class="about section-padding">
          <div class="container">
            <h1 class="text-center">About Us</h1>
              <div class="row main-about">
                  <div class="col-lg-4 col-md-6 col-12">
                      <div class="about-img">
                          <img src="/img/about.png" alt="" class="img-fluid">
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 about-text">
                      <h5>Collexi<span class="text-warning">In</span></h5>
                      <p>CollexiIn Indonesia didirikan pada tahun 2012. Saat ini, CollexiIn Indonesia merupakan retail online fashion dengan perkembangan paling pesat di Asia. 
                          Situs di setiap negara memastikan bahwa produk fashion disesuaikan dengan selera negara masing-masing dan mengadaptasi preferensinya. 
                          Dengan pilihan lebih dari 500 brand lokal dan internasional, kami membawa fashion ke dalam dimensi yang lebih baik dari sebelumnya. 
                          Kami menawarkan pakaian wanita, pakaian pria, sepatu, aksesoris, perlengkapan olahraga, busana muslim, dan banyak lagi! Hal inilah yang membuat kami menjadi tujuan utama fashion online di Indonesia. 
                      </p>
                  </div>
              </div>
              <div class="row main-about">
                  <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 about-text">
                      <p>Hanya dalam beberapa tahun, kami telah merevolusi skena mode di Asia, dimulai dari kebiasaan berbelanja Anda hingga membentuk gaya personal Anda. 
                          Lebih dari 30.000 produk online dan ratusan produk baru setiap minggunya, kami sangat ambisius dan akan terus berkembang. Kabar baiknya adalah, kami memberikan Anda banyak sekali pilihan untuk tetap menjadi seseorang yang stylish. 
                          Kami adalah sarana penyedia fashion yang diimbangi dengan teknologi terkini yang akan memberikan Anda pengalaman berbelanja online yang tak tertandingin. Mengapa berbelanja di tempat lain ketika CollexiIn adalah toko fashion online yang melayani segala keperluan fashion Anda. 
                          Hubungi kami melalui Facebook, ikuti Twitter atau Instagram untuk informasi terbaru seputar fashion dan tren terkini.
                      </p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                      <div class="about-img">
                          <img src="/img/about.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>
              <div class=" main-about">
                  <div class="mt-md-5 about-text text-center">
                      <p>Temukan ribuan brand lokal dan internasional original dan berkualitas untuk melengkapi kebutuhan fashion Anda. Jika nanti pesanan tidak memuaskan Anda, nikmati gratis 30 hari pengembalian dengan mudah di seluruh Indonesia.</p>
                      <a href="#/contact" class="btn">Let's Talk</a>
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
          addClassElement('#about', 'active');
          // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default About;
  