import MovieCardList from "../MoviesCardList/MoviesCardList";
import SearchBar from "../SearchBar/SearchBar";

function SavedMovies({
  filteredMovies,
  savedMovies,
  onDeleteMovie,
  onSubmit,
  isShortsChecked,
  onShortsCheck,
  searchError,
  onNoInput,
  filteredSavedMovies,
}) {
  return (
    <main className="saved-movies">
      <SearchBar
        savedMoviesRoute={true}
        isShortsChecked={isShortsChecked}
        onSubmit={onSubmit}
        onShortsCheck={onShortsCheck}
        onNoInput={onNoInput}
      />
      <MovieCardList
        filteredMovies={filteredMovies}
        filteredSavedMovies={filteredSavedMovies}
        searchError={searchError}
        savedMovies={savedMovies}
        savedMoviesRoute={true}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;
