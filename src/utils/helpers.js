import { BEATFILM_MOVIES_URL } from "./constants";

function filterArray(array, keyword, properties) {
  return array.filter((object) => {
    let found = false;
    Object.keys(object).forEach((prop) => {
      if (
        properties.includes(prop) &&
        typeof object[prop] === "string" &&
        object[prop].toLowerCase().includes(keyword.toLowerCase())
      ) {
        found = true;
      }
    });
    return found;
  });
}

function filterObjectsByThreshold(array, property, threshold) {
  return array.filter((object) => object[property] <= threshold);
}

function saveToStorage(shortsChecked, movies) {
  localStorage.setItem("shortsChecked", JSON.stringify(shortsChecked));
  localStorage.setItem("filteredMovies", JSON.stringify(movies));
}

function normalizeMovieData(movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: BEATFILM_MOVIES_URL + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: BEATFILM_MOVIES_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
}

function checkJwtCookie() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("jwt")) {
      return true;
    }
  }
  return false;
}

export {
  filterArray,
  filterObjectsByThreshold,
  saveToStorage,
  normalizeMovieData,
  checkJwtCookie,
};
