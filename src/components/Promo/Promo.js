import Planet from "../Planet/Planet";
function Promo() {
  return (
    <section className="main-banner">
      <div className="main-banner__content">
        <div className="main-banner__text-block">
          <h1 className="main-banner__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="main-banner__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="main-banner__button">
            <a href="#about-me" className="main-banner__button-link">
              Узнать больше
            </a>
          </div>
        </div>
        <div className="main-banner__planet-wrapper">
          <Planet />
        </div>
      </div>
    </section>
  );
}

export default Promo;
