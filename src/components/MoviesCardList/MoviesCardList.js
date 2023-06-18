import PropTypes from "prop-types";
import MoviesCard from "../MoviesCard/MoviesCard";

function MovieCardList({ movies, savedMoviesRoute }) {
  const cardListClass = `card-list__wrapper${
    savedMoviesRoute ? " card-list__wrapper_padding" : ""
  }`;
  const moreMoviesButtonClass = `card-list__more-button${
    savedMoviesRoute ? " card-list__more-button_hidden" : ""
  }`;
  const moviesList = savedMoviesRoute
    ? movies.filter((movie) => movie.isSaved)
    : movies;

  return (
    <div className="card-list">
      <div className={cardListClass}>
        <ul className="card-list__list">
          {moviesList.map((film) => (
            <li className="card-list__card-wrapper" key={film.id}>
              <MoviesCard movie={film} savedMoviesRoute={savedMoviesRoute} />
            </li>
          ))}
        </ul>
      </div>
      <button className={moreMoviesButtonClass}>Еще</button>
    </div>
  );
}


MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isSaved: PropTypes.bool.isRequired,
    })
  ),
  savedMoviesRoute: PropTypes.bool.isRequired,
};

export default MovieCardList;
