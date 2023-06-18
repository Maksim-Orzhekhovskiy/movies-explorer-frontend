import PropTypes from "prop-types";
import { useState } from "react";

function MovieCard({ movie, savedMoviesRoute }) {
  const { image, name, duration, isSaved } = movie;

  const [inSaved, setInSaved] = useState(isSaved);

  function convertor(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  const cardLikeClass = `card__saved-button ${
    inSaved && "card__saved-button_active"
  }`;

  function handleLike() {
    setInSaved(!inSaved);
  }

  return (
    <article className="card">
      <img className="card__image" src={image} alt="обложка фильма" />
      <div className="card__caption">
        <div className="card__title-wrapper">
          <h3 className="card__title">{name}</h3>
          {savedMoviesRoute ? (
            <button
              className="card__saved-button card__delete-button"
              onClick={handleLike}
            />
          ) : (
            <button className={cardLikeClass} onClick={handleLike} />
          )}
        </div>
        <p className="card__duration">{convertor(duration)}</p>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isSaved: PropTypes.bool.isRequired,
  }),
  savedMoviesRoute: PropTypes.bool.isRequired,
};

export default MovieCard;
