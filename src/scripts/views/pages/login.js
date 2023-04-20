const Login = {
  async render() {
    return `
            <h2>This Login</h2>
         `;
  },

  async afterRender() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    document.querySelector('#login').classList.add('active');
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
