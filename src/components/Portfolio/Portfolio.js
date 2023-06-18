function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__site-list">
        <li className="portfolio__site">
          <p className="portfolio__project">Статичный сайт</p>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/how-to-learn"
            className="portfolio__link"
          ></a>
        </li>
        <li className="portfolio__site">
          <p className="portfolio__project">Адаптивный сайт</p>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/russian-travel"
            className="portfolio__link"
          ></a>
        </li>
        <li className="portfolio__site">
          <p className="portfolio__project">Одностраничное&nbsp;приложение</p>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/react-mesto-api-full-gha"
            className="portfolio__link"
          ></a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
