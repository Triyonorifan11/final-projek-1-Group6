import Swal from 'sweetalert2';
import checkoutProduk from '../../utils/checkoutProduk';
import {
  getItemCheckout, getUserInfo, redirect,
} from '../../utils/functions';
import { cardCheckoutPembayaran } from '../../utils/template';

const CheckoutPage = {
  async render() {
    return `
      <section class="container mt-5" id="checkout_item">
      </section>
      
    `;
  },

  async afterRender() {
    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'customer') {
        redirect('#/');
      } else {
        const dataCheckoutItem = getItemCheckout();
        if (dataCheckoutItem !== false) {
          const cardCheckout = document.getElementById('checkout_item');
          cardCheckout.innerHTML = cardCheckoutPembayaran(dataCheckoutItem);
          const btnpay = document.getElementById('btnpay');
          btnpay.addEventListener('click', async (e) => {
            e.preventDefault();
            Swal.fire({
              icon: 'question',
              title: 'Bayar sekarang ?',
              showCancelButton: true,
              confirmButtonText: 'Bayar',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                checkoutProduk.init(dataCheckoutItem);
              }
            });
          });
        } else {
          redirect('#/keranjang');
        }
      }
    }
  },
};

export default CheckoutPage;
