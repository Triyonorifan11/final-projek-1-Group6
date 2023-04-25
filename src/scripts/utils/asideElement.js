class AsideElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <div class="d-grid gap-2">
            <a class="btn btn-secondary aside-link mb-2" href="#/dashboard" id="dashboard" role="button">Dashboard</a>
            <a class="btn btn-secondary aside-link mb-2" href="#/my-product" id="myProduct" role="button">Products</a>
            <a class="btn btn-secondary aside-link mb-2" href="#/checkout" id="admincheckout" role="button">Checkouts</a>
        </div>
    `;
  }
}

customElements.define('aside-element', AsideElement);
