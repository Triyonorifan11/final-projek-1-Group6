import { addClassElement } from '../../utils/functions';

const Contact = {
  async render() {
    return `
        <h1 class="text-center pt-5">Contact Us</h1>
        <div class="contact-wrap">
            <div class="contact-in bg-light">
                <h1>Contact Info</h1>
                <h2><i class="bi bi-telephone-fill"></i>Phone</h2>
                <p>+62-8822-7234-856</p>
                <h2><i class="bi bi-envelope-fill"></i>Email</h2>
                <p>collexiin@gmail.com</p>
                <h2><i class="bi bi-geo-alt-fill"></i>Address</h2>
                <p>Surabaya, Jawa Timur, Indonesia</p>
                <ul>
                    <li><a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i class="bi bi-twitter"></i></a></li>
                    <li><a href="https://www.google.com/"><i class="bi bi-google"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a></li>
                </ul>
            </div>
            <div class="contact-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.2096185681!2d112.63011003502965!3d-7.275611975199526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1682492669336!5m2!1sid!2sid" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
         `;
  },

  async afterRender() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
    });
    addClassElement('#contact', 'active');
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Contact;
