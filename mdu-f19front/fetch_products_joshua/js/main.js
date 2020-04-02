// Creates a products array
let _products = [];

/*
Fetches json data from the file persons.json
*/


fetch('json/products.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    // Json array gets inserted into empty products array
    products = json;
    // TODO: call append functionality
    appendProducts(json);
  });

/*
Appends json data to the DOM
*/
function appendProducts(products) {
  let htmlTemplate = "";

  for (let product of products) {

    htmlTemplate += `
    <article class="product">
    <img src="${product.img}"></img>
    <h2>${product.model}</h2>
    <p>Brand: ${product.brand}</p>
    <p>Price: ${product.price},-</p>
    <button onclick="editProduct()">Edit</button>
    <button class="deleteButton" id="" onclick="deleteProduct()">Delete</button>
    </article>
`
  }

  // TODO: loop through products and append to them DOM
  document.querySelector('#productWrapper').innerHTML = htmlTemplate;
}

function search(searchValue) {
  console.log(searchValue);

  // TODO: implement search functionality
  let filteredProducts = [];

  for (let product of _products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();
    if (model.includes(searchValue) || brand.includes(searchValue)) {
      filteredProducts.push(product);
    }
  }
  console.log(filteredProducts);
  appendProducts(filteredProducts);
}

function checkStock() {
  let checkBox = document.getElementById("inStock");

  if (checkBox.checked == true) {
    let filteredProducts = [];

    for (let product of products) {
      if (product.status === "inStock") {
        filteredProducts.push(product);
      }
    }
    appendProducts(filteredProducts);

  } else {
    appendProducts(products);
  }
}

// todo delete and edit
function deleteProduct() {
  let button = this.document.querySelector('.deleteButton');
  let product = button.closest('.product');

  // Only removes the first product no matter what button you press
  /* product.style.display = 'none'; */


  // Removes every product in order per press
  product.parentNode.removeChild(product);

  // what do i do.....
}