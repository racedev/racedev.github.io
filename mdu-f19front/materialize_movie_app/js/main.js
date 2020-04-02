"use strict";

let tabs = document.querySelector('#tabs');
let instance = M.Tabs.init(tabs);

// =========== Movie SPA functionality =========== //

let movies = [];

// fetch all movies from WP
function getMovies() {
  fetch('http://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendMovies(json);
      movies = json;
    });
}

getMovies();

// append movies to the DOM
function appendMovies(movies) {
  let htmlTemplate = "";

  for (let movie of movies) {
    htmlTemplate += `
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="${movie.acf.img}">
          </div>
          <div class="card-content">
            <span class="card-title">${movie.title.rendered} (${movie.acf.year})</span>
            <p>${movie.acf.description}</p>
          </div>
          <div class="card-action">
            <a href="${movie.acf.trailer}" target="_blank">Watch the trailer</a>
          </div>

        </div>
      </div>
    `;
  }

  document.querySelector('#movies-container').innerHTML = htmlTemplate;
}

// search functionality
function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredMovies = [];
  for (let movie of movies) {
    let title = movie.title.rendered.toLowerCase();
    if (title.includes(searchQuery)) {
      filteredMovies.push(movie);
    }
  }
  console.log(filteredMovies);
  appendMovies(filteredMovies);
}

// fetch all genres / categories from WP
function getGenres() {
  fetch('http://movie-api.cederdorff.com/wp-json/wp/v2/categories')
    .then(function(response) {
      return response.json();
    })
    .then(function(categories) {
      console.log(categories);
      appendGenres(categories);
    });
}

getGenres();

// append all genres as select options (dropdown)
function appendGenres(genres) {
  let htmlTemplate = "";
  for (let genre of genres) {
    htmlTemplate += `
      <option value="${genre.id}">${genre.name}</option>
    `;
  }

  document.querySelector('#select-genre').innerHTML += htmlTemplate;

  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);

}

// genre selected event - fetch movies by selected category
function genreSelected(genreId) {
  console.log(genreId);
  if (genreId) {
    fetch(`http://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=${genreId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(movies) {
        console.log(movies);
        appendMoviesByGenre(movies);
      });
  }
}

// append movies by genre
function appendMoviesByGenre(moviesByGenre) {
  let htmlTemplate = "";

  for (let movie of moviesByGenre) {
    htmlTemplate += `
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="${movie.acf.img}">
        </div>
        <div class="card-content">
          <span class="card-title">${movie.title.rendered} (${movie.acf.year})</span>
          <p>${movie.acf.description}</p>
        </div>
        <div class="card-action">
          <a href="${movie.acf.trailer}" target="_blank">Watch the trailer</a>
        </div>
      </div>
    </div>
    `;
  }

  // if no movies, display feedback to the user
  if (moviesByGenre.length === 0) {
    htmlTemplate = `
      <p class="center-align">No Movies</p>
    `;
  }

  document.querySelector('#movies-by-genre-container').innerHTML = htmlTemplate;
}