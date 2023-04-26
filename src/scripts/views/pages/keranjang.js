import { addClassElement } from '../../utils/functions';

const Keranjang = {
    async render() {
      return `
      <h1 class="text-center pt-5">Keranjang Anda</h1>
        <div class="small-container card-keranjang">

            <table>
                <tr>
                    <th>Produk</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div class="card-info">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" alt="">
                            <div>
                                <p>Celana Jeans</p>
                                <small>Harga : Rp 20.000</small>
                                <br>
                                <a href="#">Hapus</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1"></td>
                    <td>Rp 20.000</td>
                </tr>
                <tr>
                    <td>
                        <div class="card-info">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" alt="">
                            <div>
                                <p>Celana Jeans</p>
                                <small>Harga : Rp 20.000</small>
                                <br>
                                <a href="#">Hapus</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1"></td>
                    <td>Rp 20.000</td>
                </tr>
                <tr>
                    <td>
                        <div class="card-info">
                            <img src="https://firebasestorage.googleapis.com/v0/b/collexi-fp-1-hactiv8.appspot.com/o/products%2Fproduct_fvysiiiuaypq89qrcm6.jpg?alt=media&token=918aee0a-57c2-4533-b2c2-e488dfb2e42e" alt="">
                            <div>
                                <p>Celana Jeans</p>
                                <small>Harga : Rp 20.000</small>
                                <br>
                                <a href="#">Hapus</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1"></td>
                    <td>Rp 20.000</td>
                </tr>
            </table>
        
            <div class="total-harga">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>Rp 60.000</td>
                    </tr>
                    <tr>
                        <td>Ongkir</td>
                        <td>Rp 10.000</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Rp 70.000</td>
                    </tr>
                </table>
            </div>
        
        </div>
         `;
    },
  
    async afterRender() {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.remove('active');
          });
          addClassElement('#keranjang', 'active');
          // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Keranjang;
  