function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__head-wrapper">
        <h2 className="about-project__title">О проекте</h2>
      </div>
      <ul className="about-project__text-block">
        <li className="about-project__text-section">
          <h3 className="about-project__text-section-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text-section-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__text-section">
          <h3 className="about-project__text-section-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text-section-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__duration-block">
        <li className="about-project__duration-backend">1 неделя</li>
        <li className="about-project__duration-frontend">4 недели</li>
        <li className="about-project__duration-backend-description">
          Back-end
        </li>
        <li className="about-project__duration-frontend-description">
          Front-end
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
