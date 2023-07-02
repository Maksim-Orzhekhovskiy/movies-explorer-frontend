import { useEffect, useState } from "react";
import ShortsCheckbox from "../ShortsCheckbox/ShortsCheckbox";

function SearchBar({
  onSubmit,
  isShortsChecked,
  onShortsCheck,
  savedMoviesRoute,
  onNoInput,
}) {
  const savedKeyword = localStorage.getItem("keyword");
  const [keyword, setKeyword] = useState(
    (!savedMoviesRoute && savedKeyword) || ""
  );

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    if (savedMoviesRoute) {
      setKeyword("");
    }
  }, [savedMoviesRoute]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!savedMoviesRoute) {
      localStorage.setItem("keyword", keyword);
    }

    if (keyword.trim() === "") {
      onNoInput();
      return;
    }

    onSubmit(keyword);
  }

  return (
    <section className="search-bar">
      <form className="search-bar__form">
        <div className="search-bar__film">
          <input
            className="search-bar__input"
            placeholder="Фильм"
            value={keyword || ""}
            onChange={handleChange}
            required
          ></input>
          <button
            className="search-bar__submit"
            onClick={handleSubmit}
          ></button>
        </div>
        <fieldset className="search-bar__filter">
          <ShortsCheckbox
            isShortsChecked={isShortsChecked}
            onShortsCheck={onShortsCheck}
          />
        </fieldset>
      </form>
      <div className="search-bar__underline"></div>
    </section>
  );
}

export default SearchBar;
