import SearchBar from "../SearchBar/SearchBar";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieExampleCards from "../../utils/movieExampleCards";

function Movies() {
  return (
    <main className="movies">
      <SearchBar />
      <MoviesCardList movies={movieExampleCards} savedMoviesRoute={false} />
    </main>
  );
}

export default Movies;
