function Techs() {
  return (
    <section className="technology">
      <div className="technology__content-wrapper">
        <div className="technology__head-wrapper">
          <h2 className="technology__title">Технологии</h2>
        </div>
        <div className="technology__text-block">
          <h3 className="technology__text-block-title">7 технологий</h3>
          <p className="technology__text-block-description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="technology__stack">
          <li className="technology__stack-item">HTML</li>
          <li className="technology__stack-item">CSS</li>
          <li className="technology__stack-item">JS</li>
          <li className="technology__stack-item">React</li>
          <li className="technology__stack-item">Git</li>
          <li className="technology__stack-item">Express.js</li>
          <li className="technology__stack-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
