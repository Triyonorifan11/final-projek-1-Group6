import { addClassElement, getUserInfo, redirect } from '../../utils/functions';
import loginAkun from '../../utils/loginAkun';

const Login = {
  async render() {
    return `
    <section id="login" style="overflow-x:hidden">
     <div class="row my-5">
       <div class="col-md-6" style="height: 100vh">
         <div class="d-flex justify-content-center pt-5 align-items-center">
            <h1 class="font-bold text-warning py-4">Login!</h1>
         </div>
         <div class="text-center login-view">
            <h5>Login untuk masuk ke akun Anda disini</h5>
            <div class"mt-5 pt-5">
              <button type="button" class="btn btn-danger btn-lg mt-5" id="btn-login"><i class="bi bi-google mr-3"></i> Login With Google</button>
            </div>

            <div class="d-flex justify-content-center pt-5 align-items-center">
              <p>Belum punya akun? <a href="#/register" class="link-offset-2 link-underline link-underline-opacity-0">Register di sini!</a></p>
            </div>
         </div>
       </div>
       <div class="col-md-6 d-md-block d-none">
         <img src="/img/home/3.jpg" class="d-block half-circle-left" width="100%" height="100%" alt="...">
       </div>
     </div>
    </section>
    `;
  },

  async afterRender() {
    const userAccess = getUserInfo();
    if (userAccess) {
      redirect('#/');
    }
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    addClassElement('#login', 'active');

    // Fungsi ini akan dipanggil setelah render()
    const btnLogin = document.getElementById('btn-login');
    btnLogin.addEventListener('click', async (e) => {
      e.preventDefault();
      await loginAkun.init();
    });
  },
};

export default Login;
