import {
  addClassElement, getUserInfo, redirect,
} from '../../utils/functions';

const Dashboard = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary" style="height: 100vh">
            <h3>Dashboard</h3>
            <div class="row py-3">
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Total Produk</h4>
                        <h5 class="fw-bold text-warning">10 Produk</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Total Produk</h4>
                        <h5 class="fw-bold text-warning">10 Produk</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Total Produk</h4>
                        <h5 class="fw-bold text-warning">10 Produk</h5>
                      </div>
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
    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'admin') {
        redirect('#/');
      } else {
        document.querySelectorAll('.aside-link').forEach((link) => {
          link.classList.remove('btn-warning');
        });
        addClassElement('#dashboard', 'btn-warning');
      }
    } else {
      redirect('#/');
    }
  },
};

export default Dashboard;
