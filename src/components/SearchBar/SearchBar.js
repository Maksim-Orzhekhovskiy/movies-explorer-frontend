function SearchBar() {
  return (
    <section className="search-bar">
      <form className="search-bar__form">
        <div className="search-bar__film">
          <input className="search-bar__input" placeholder="Фильм"></input>
          <button className="search-bar__submit"></button>
        </div>
        <fieldset className="search-bar__filter">
          <input className="search-bar__checkbox" type="checkbox"></input>
          <label className="search-bar__checkbox-text">Короткометражки</label>
        </fieldset>
      </form>
      <div className="search-bar__underline"></div>
    </section>
  );
}
export default SearchBar;
