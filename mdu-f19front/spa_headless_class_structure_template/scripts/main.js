import Spa from "./spa.js";
import MovieService from "./movie-service.js";

let spa = new Spa("movies");
let movieService = new MovieService();
movieService.getMovies();

//functions in global variables
window.pageChange = function() {

}

window.categorySelected = function(id) {

}

window.search = function(searchValue) {

}