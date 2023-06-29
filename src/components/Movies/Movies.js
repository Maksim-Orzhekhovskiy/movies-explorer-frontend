import SearchBar from "../SearchBar/SearchBar";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  searchError,
  savedMovies,
  isLoading,
  isShortsChecked,
  onShortsCheck,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  onNoInput,
  filteredMovies,
  filteredSavedMovies,
}) {
  return (
    <main className="movies">
      <SearchBar
        savedMoviesRoute={false}
        isShortsChecked={isShortsChecked}
        onSubmit={onSubmit}
        onShortsCheck={onShortsCheck}
        onNoInput={onNoInput}
      />
      <MoviesCardList
        savedMoviesRoute={false}
        savedMovies={savedMovies}
        searchError={searchError}
        filteredMovies={filteredMovies}
        filteredSavedMovies={filteredSavedMovies}
        isLoading={isLoading}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default Movies;
