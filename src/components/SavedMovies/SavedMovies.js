import SearchForm from "../SearchBar/SearchBar";
import MovieCardList from "../MoviesCardList/MoviesCardList";
import movieExampleCards from "../../utils/movieExampleCards";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MovieCardList movies={movieExampleCards} savedMoviesRoute={true} />
    </main>
  );
}

export default SavedMovies;
