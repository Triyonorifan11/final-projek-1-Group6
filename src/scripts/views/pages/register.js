import { addClassElement, getUserInfo, redirect } from '../../utils/functions';
import registerAkun from '../../utils/registerAkun';

const Register = {
  async render() {
    return `
      <section id="login" style="overflow-x:hidden">
       <div class="row my-5">
         <div class="col-md-6 d-md-block d-none">
           <img src="/img/home/3.jpg" class="d-block half-circle-right" width="100%" height="100%" alt="...">
         </div>
         <div class="col-md-6" style="height: 100vh">
           <div class="d-flex justify-content-center pt-5 align-items-center">
              <h1 class="font-bold text-warning py-4">Register!</h1>
           </div>
           <div class="text-center login-view">
              <h5>Register untuk daftar akun Anda disini</h5>
              <div class"mt-5 pt-5">
                <button type="button" class="btn btn-danger btn-lg mt-5" id="btn-register"><i class="bi bi-google mr-3"></i> Register With Google</button>
              </div>
  
              <div class="d-flex justify-content-center pt-5 align-items-center">
                <p>Sudah punya akun? <a href="#/login" class="link-offset-2 link-underline link-underline-opacity-0">Login!</a></p>
              </div>
           </div>
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

    const btnregister = document.getElementById('btn-register');
    btnregister.addEventListener('click', async (e) => {
      e.preventDefault();
      await registerAkun.init();
    });
  },
};

export default Register;
