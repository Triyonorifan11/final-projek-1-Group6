const Home = {
  async render() {
    return `
        <div class="container">
          <h2>This Home</h2>
          <div class="card" style="width: 18rem;">
            <img src="https://firebasestorage.googleapis.com/v0/b/capstone-project-sib3.appspot.com/o/products%2Fproduct_e1d5392330465d17e.jpg?alt=media&token=9f982fee-eef9-43de-99a3-a95c004faa01" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
