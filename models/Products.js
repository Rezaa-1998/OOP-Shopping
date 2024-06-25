import Displey from "./Dispalay.js";

class Products extends Displey {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }
  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }

  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `

        <div id="product-info">
            <h3>${name}</h3>
            <div>
                <span>$ ${price}</span>
                <button data-id=${id}>+</button>
            </div>
        </div>
    `;
    return infoJSX;
  }
  // رو اجرا می کنه handleEvent رو دادیم میاد فاکشن this اومدیم و addEventListener اگر به جای فانکشن به
  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
