function Footer() {
  return (
    <footer className="footer">
      <div className="footer__project">
        <p className="footer__project-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__info">
        <p className="footer__date">© 2023</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Maksim-Orzhekhovskiy"
            className="footer__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
