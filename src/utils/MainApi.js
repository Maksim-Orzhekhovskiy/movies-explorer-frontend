import {
  BASE_URL,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  CURRENT_USERS_ENDPOINT,
  MOVIES_ENDPOINT,
} from "./constants";

function renderResponse(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

function authorizeUser(email, password) {
  return fetch(`${BASE_URL}${SIGNIN_ENDPOINT}`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(renderResponse);
}

function registerUser(email, password, name) {
  return fetch(`${BASE_URL}${SIGNUP_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
    credentials: "include",
  }).then(renderResponse);
}

function logoutUser() {
  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(renderResponse);
}

function checkAuth() {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    method: "GET",
  }).then(renderResponse);
}

function editUserProfile(name, email) {
  return fetch(`${BASE_URL}${CURRENT_USERS_ENDPOINT}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
    credentials: "include",
  }).then(renderResponse);
}

function getSavedMovies() {
  return fetch(`${BASE_URL}${MOVIES_ENDPOINT}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(renderResponse);
}

function saveMovie(movie) {
  return fetch(`${BASE_URL}${MOVIES_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.thumbnail,
      movieId: movie.movieId,
    }),
  }).then(renderResponse);
}

function deleteMovie(movieId) {
  return fetch(`${BASE_URL}${MOVIES_ENDPOINT}/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => {
    return res.ok ? res : res.then((err) => Promise.reject(`${err.message}`));
  });
}

export {
  authorizeUser,
  registerUser,
  logoutUser,
  checkAuth,
  editUserProfile,
  getSavedMovies,
  saveMovie,
  deleteMovie,
};
