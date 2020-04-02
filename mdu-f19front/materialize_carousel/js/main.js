"use strict";

let elems = document.querySelectorAll('.carousel');
let options = {
  fullWidth: true,
  indicators: true
};
let instances = M.Carousel.init(elems, options);