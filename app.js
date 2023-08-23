import getProducts from "./src/utils/getProducts.js";

const root = document.getElementById("root");

const renderProducts = async () => {
  try {
    const products = await getProducts();
    console.log(products);

    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid")

    products.forEach(product => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product-container");

      const productImage = document.createElement("img");
      productImage.src = product.images[0].src;
      productImage.classList.add("product-image");

      const productName = document.createElement("h2");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = "Price: " + product.price;

      productContainer.appendChild(productImage);
      productContainer.appendChild(productName);
      productContainer.appendChild(productPrice);

      root.appendChild(productContainer);
    });
  } catch (error) {
    console.error("Error occurred while rendering products.\n", error);
  }
};

renderProducts();