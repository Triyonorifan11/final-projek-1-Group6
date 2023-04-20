const Contact = {
    async render() {
      return `
        <section id="contact" class="contact mb-5">
            <div class="container">
                <div class="row pt-4 mb-4">
                    <div class="col text-center">
                        <h2>Contact Us</h2>
                    </div>
                </div>

                <div class="row justify-content-center pb-4">
                    <div class="col-lg-4">
                        <div class="card text-white text-bg-dark mb-3 text-center">
                            <div class="card-body">
                                <h5 class="card-title">Contact Us</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellat!</p>
                            </div>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><h1>Lokasi</h1></li>
                            <li class="list-group-item">Kantor</li>
                            <li class="list-group-item">Ds. Slungkep, Kayen, Pati</li>
                            <li class="list-group-item">Jawa Tengah, Indonesia</li>
                        </ul>
                    </div>

                    <div class="col-lg-6">
                        <form>
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" class="form-control" id="nama">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="telp">No Telp</label>
                                <input type="text" class="form-control" id="telp">
                            </div>
                            <div class="form-group">
                                <label for="pesan">Pesan</label>
                                <textarea name="pesan" id="pesan" class="form-control"></textarea>
                            </div>
                            <div class="form-group pt-3">
                                <button type="button" class="btn btn-primary">Kirim Pesan!</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
         `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Contact;
  