/*
Fetches json person data from the file persons.json
*/
function loadFamilyMembers() {
  fetch('json/persons.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log("Family Members: ");
      console.log(json);
      appendPersons(json, "familyMembers");
    });
}
/*
Fetches json teacher data from the file teachers.json
*/
function loadTeachers() {
  fetch('json/teachers.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log("Teachers: ");
      console.log(json);
      appendPersons(json, "teachers");
    });
}

/*
Fetches json person data from the file products.json
*/
function loadProducts() {
  fetch('json/products.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log("Products: ");
      console.log(json);
      appendProducts(json);
    });
}

/*
appends json data to the DOM
*/
function appendPersons(persons, type) {
  let htmlTemplate = "";
  for (let person of persons) {
    htmlTemplate += `
    <article>
      <h4>${person.name}</h4>
      <a href='mailto:${person.mail}'>${person.mail}</a>
    </article>
    `;
  }

  // appends htmlTemplate depending on given type
  if (type === "familyMembers") {
    document.querySelector("#family-members").innerHTML = htmlTemplate;
  } else if (type === "teachers") {
    document.querySelector("#teachers").innerHTML = htmlTemplate;
  }

}

/*
appends json data to the DOM
*/
function appendProducts(products) {
  let htmlTemplate = "";
  for (let product of products) {
    htmlTemplate += `
      <article>
        <img src="${product.img}">
        <h2>${product.model}</h2>
        <h3>${product.brand}</h3>
        <p>Price: ${product.price} kr.</p>
        <p class="${product.status}">Status: ${product.status}</p>
      </article>
    `;
  }
  document.querySelector('#products-container').innerHTML = htmlTemplate;
}

/*
loads and appends json post data to the DOM
*/
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      console.log(posts);
      let htmlTemplate = "";
      for (let post of posts) {
        htmlTemplate += `
        <article>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        </article>
        `;
      }
      document.querySelector("#posts").innerHTML = htmlTemplate;
    });
}