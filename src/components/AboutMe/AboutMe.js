import me from "../../images/me.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__head-wrapper">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__my-name">Максим</h3>
          <p className="about-me__job">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__bio">
            Я родился в Украине, закончил техникум СПЭТ. У меня есть жена и сын.
            Я люблю слушать музыку, а ещё увлекаюсь онлайн-играми. Недавно начал
            кодить. С 2023 года работаю в компании «Rocket Firm». Еще до того,
            как прошёл курс по веб-разработке, нашел себе работу в IT.
          </p>
          <a
            rel="noopener noreferrer"
            href="https://github.com/Maksim-Orzhekhovskiy"
            className="about-me__github"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img src={me} alt="Моё фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
