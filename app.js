import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

const CartInstance = new Cart(cartListNode, totalPriceNode);
async function render() {
  const productsData = await fetchData();
  const ProductsInstance = new Products(
    productsNode,
    productsData,
    CartInstance
  );

  console.log(CartInstance);
  ProductsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
