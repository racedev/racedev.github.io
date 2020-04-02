import Loader from "./loader.js";

class MovieService {

  constructor() {
    this.movies = [];
    this.categories = [];
    this.loader = new Loader();
  }

  async getMovies() {
    let data = await fetch('https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed').then(res => res.json());
    console.log(data);
    this.movies = data;
    this.appendMovies(this.movies);
    this.loader.show(false);
  }

  getCategories() {

  }

  getMoviesByCategory(categoryId) {

  }

  appendMovies(movies) {
    let htmlTemplate = "";
    for (let movie of movies) {
      htmlTemplate += `
        <article>
          <h2>${movie.title.rendered} (${movie.acf.year})</h2>
          <img src="${movie.acf.img}">
          <p>${movie.acf.description}</p>
          <iframe src="${movie.acf.trailer}"></iframe>
        </article>
      `;
    }
    document.querySelector('#movies-container').innerHTML = htmlTemplate;
  }

  appendCategories() {
    let htmlTemplate = "";
    for (let category of this.categories) {
      htmlTemplate += `
        <option value="${category.id}">${category.name}</option>
      `;
    }

    document.querySelector('#select-category').innerHTML += htmlTemplate;
  }

  appendMoviesByCategory(movies) {
    let htmlTemplate = "";
    for (let movie of movies) {
      htmlTemplate += `
        <article>
          <h2>${movie.title.rendered} (${movie.acf.year})</h2>
          <img src="${movie.acf.img}">
          <p>${movie.acf.description}</p>
          <iframe src="${movie.acf.trailer}"></iframe>
        </article>
      `;
    }
    // if no movies, display feedback to the user
    if (movies.length === 0) {
      htmlTemplate = `
        <p>No Movies</p>
      `;
    }

    document.querySelector('#movies-by-category-container').innerHTML = htmlTemplate;
  }

  search(value) {
    let searchQuery = value.toLowerCase();
    let filteredMovies = [];
    for (let movie of this.movies) {
      let title = movie.title.rendered.toLowerCase();
      if (title.includes(searchQuery)) {
        filteredMovies.push(movie);
      }
    }
    console.log(filteredMovies);
    this.appendMovies(filteredMovies);
  }
}

export default MovieService;