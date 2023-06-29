import { useState, useEffect } from "react";
import { BEATFILM_MOVIES_URL } from "../../utils/constants";

function MovieCard({
  movie,
  savedMoviesRoute,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const { image, nameRU, duration } = movie;

  const [isSaved, setIsSaved] = useState(
    savedMoviesRoute
      ? true
      : savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)
  );

  function convertor(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  const cardLikeClass = `card__saved-button ${
    isSaved && "card__saved-button_active"
  }`;

  useEffect(() => {
    setIsSaved(
      savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id)
    );
  }, [movie, savedMovies]);

  function handleSaveMovie() {
    onSaveMovie(movie, isSaved, setIsSaved);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          className="card__image"
          src={
            savedMoviesRoute
              ? `${image}`
              : `${BEATFILM_MOVIES_URL}${movie.image.url}`
          }
          alt="обложка фильма"
        />
      </a>
      <div className="card__caption">
        <div className="card__title-wrapper">
          <h3 className="card__title">{nameRU}</h3>
          {savedMoviesRoute ? (
            <button
              className="card__saved-button card__delete-button"
              onClick={handleDeleteMovie}
            />
          ) : (
            <button
              className={cardLikeClass}
              onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
            />
          )}
        </div>
        <p className="card__duration">{convertor(duration)}</p>
      </div>
    </article>
  );
}

export default MovieCard;
