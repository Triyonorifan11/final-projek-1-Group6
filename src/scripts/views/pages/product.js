import { addClassElement } from '../../utils/functions';

const Product = {
    async render() {
      return `
            <div class="jumbotron text-center pt-5 pb-5">
                <h3 class="display-5">Selamat Datang di Product Kami</h3>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-3">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-dark btn-lg" href="#" role="button">Mulai Belanja</a>
            </div>
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
  