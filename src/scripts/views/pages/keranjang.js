import Swal from 'sweetalert2';
import {
  addClassElement, getItemCart, getUserInfo, redirect, removeItemCart,
} from '../../utils/functions';
import { tblRowKeranjang } from '../../utils/template';

const Keranjang = {
  async render() {
    return `
      <h1 class="text-center pt-5">Keranjang Anda</h1>
        <div class="small-container card-keranjang">
            <div class="table-responsive">
                <table class="table" id="tblKeranjang">
                    <thead>
                        <tr>
                            <th scope="col">Produk</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Buy Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
         `;
  },

  async afterRender() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });

    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'customer') {
        redirect('#/');
      } else {
        const tbody = document.querySelector('tbody');
        addClassElement('#keranjang', 'active');
        const itemCart = getItemCart();
        if (itemCart !== false) {
          itemCart.forEach((item) => {
            tbody.innerHTML += tblRowKeranjang(item);
          });
          const btnRemoveItem = document.querySelectorAll('.btnRemove');
          btnRemoveItem.forEach((btnRemove) => {
            btnRemove.addEventListener('click', (e) => {
              const namaProduk = btnRemove.getAttribute('data-namaProduk');
              const idProduk = btnRemove.getAttribute('data-idProduk');
              e.preventDefault();
              Swal.fire({
                icon: 'question',
                title: `Hapus Item ${namaProduk}?`,
                showCancelButton: true,
                confirmButtonText: 'Hapus',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  removeItemCart(idProduk);
                  Swal.fire('Berhasil!', '', 'success').then((res) => ((res.isConfirmed) ? window.location.reload() : ''));
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info');
                }
              });
            });
          });
        } else {
          tbody.innerHTML = `
        <tr>
          <td class="text-start">Tidak ada item</td>
        </tr>
      `;
        }
      }
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Harap Login',
        title: 'Perhatian',
      }).then((result) => {
        if (result.isConfirmed) {
          redirect('#/');
        }
      });
    }

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Keranjang;
