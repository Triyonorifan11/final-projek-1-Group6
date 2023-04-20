/* eslint-disable class-methods-use-this */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import loader from '../utils/loader';

class App {
  constructor({ header, aside, content }) {
    this._header = header;
    this.aside = aside;
    this._content = content;
  }

  async renderPage() {
    this._content.innerHTML = loader();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = `
          <h1>Upss Error!</h1>
          <p>Please Check this page in route  is not exist</p>
          <h1>${error}</h1>
        `;
    }
  }
}

export default App;
