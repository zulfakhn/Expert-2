class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="banner">
    <img src="/images/heros/hero-image_4.jpg" alt="banner" />
  </div>
  `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
