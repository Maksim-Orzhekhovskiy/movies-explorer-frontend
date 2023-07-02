function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Ошибка: ${res.status}/${res.statusText}`);
  }
}

function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies").then((res) =>
    checkResponse(res)
  );
}

export default getMovies;
