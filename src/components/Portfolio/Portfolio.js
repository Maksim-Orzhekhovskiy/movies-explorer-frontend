function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__site-list">
        <li className="portfolio__site">
          <a
            className="portfolio__project"
            href="https://github.com/Maksim-Orzhekhovskiy/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li className="portfolio__site">
          <a
            className="portfolio__project"
            href="https://github.com/Maksim-Orzhekhovskiy/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
        <li className="portfolio__site">
          <a
            className="portfolio__project"
            href="https://github.com/Maksim-Orzhekhovskiy/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное&nbsp;приложение
          </a>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
