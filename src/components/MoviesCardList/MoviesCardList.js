import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import useResize from "../../hooks/useResize";
import Preloader from "../Preloader/Preloader";
import {
  LAPTOP_SCREEN_WIDTH,
  HIGH_RES_DISPLAYED_AMOUNT,
  HIGH_RES_ADD_CARD,
  TABLET_SCREEN_WIDTH,
  MIDDLE_RES_DISPLAYED_AMOUNT,
  MIDDLE_RES_ADD_CARD,
  MOBILE_SCREEN_WIDTH,
  LOW_RES_DISPLAYED_AMOUNT,
  LOW_RES_ADD_CARD,
} from "../../utils/constants";

function MovieCardList({
  filteredMovies,
  filteredSavedMovies,
  searchError,
  savedMovies,
  savedMoviesRoute,
  onSaveMovie,
  onDeleteMovie,
  isLoading,
}) {
  const sizeWindow = useResize();
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = useState(0);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const cardListClass = `card-list__wrapper ${
    savedMoviesRoute && "card-list__wrapper_padding"
  }`;

  const displayedMoviesClass = `card-list__list ${
    isLoading && "card-list__list_hidden"
  }`;

  const moreMoviesButtonHidden = `${
    (savedMoviesRoute || searchError) && "card-list__more-button_hidden"
  }`;
  const moviesArray = savedMoviesRoute ? filteredSavedMovies : filteredMovies;
  const moreMoviesButtonClass = `card-list__more-button ${
    moviesArray.length <= numberOfDisplayedMovies &&
    "card-list__more-button_hidden"
  } ${moreMoviesButtonHidden}`;
  const handleMoreMovies = () => {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + numberOfAddedMovies);
  };


  useEffect(() => {
    const countMoviesOnDisplay = () => {
      if (sizeWindow.width >= LAPTOP_SCREEN_WIDTH) {
        setNumberOfDisplayedMovies(HIGH_RES_DISPLAYED_AMOUNT);
        setNumberOfAddedMovies(HIGH_RES_ADD_CARD);
      } else if (sizeWindow.width >= TABLET_SCREEN_WIDTH) {
        setNumberOfDisplayedMovies(MIDDLE_RES_DISPLAYED_AMOUNT);
        setNumberOfAddedMovies(MIDDLE_RES_ADD_CARD);
      } else if (sizeWindow.width >= MOBILE_SCREEN_WIDTH) {
        setNumberOfDisplayedMovies(LOW_RES_DISPLAYED_AMOUNT);
        setNumberOfAddedMovies(LOW_RES_ADD_CARD);
      }
    };
    countMoviesOnDisplay();
  }, [sizeWindow]);

  useEffect(() => {
    setDisplayedMovies(moviesArray.slice(0, numberOfDisplayedMovies));
  }, [moviesArray, numberOfDisplayedMovies]);

  return (
    <div className="card-list">
      <div className={cardListClass}>
        {searchError ? (
          <p className="card-list-error">{searchError}</p>
        ) : (
          <ul className={displayedMoviesClass}>
            {displayedMovies.map((movie) => (
              <li
                className="card-list__card-wrapper"
                key={savedMoviesRoute ? movie.movieId : movie.id}
              >
                <MoviesCard
                  movie={movie}
                  savedMoviesRoute={savedMoviesRoute}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <Preloader loading={isLoading} />
      <button className={moreMoviesButtonClass} onClick={handleMoreMovies}>
        Еще
      </button>
    </div>
  );
}

export default MovieCardList;
