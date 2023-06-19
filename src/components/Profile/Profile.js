function Profile() {
  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, Максим!</h2>
        <form className="profile__form">
          <fieldset className="profile__input-wrapper">
            <label className="profile__input-title">Имя</label>
            <input className="profile__input" placeholder="Максим" />
          </fieldset>
          <fieldset className="profile__input-wrapper">
            <label className="profile__input-title">E-mail</label>
            <input className="profile__input" placeholder="pochta@yandex.ru" />
          </fieldset>
          <span className="profile__input-error">Что-то пошло не так...</span>
          <button className="profile__button-edit">Редактировать</button>
        </form>
        <button className="profile__button-logout">Выйти из аккаунта</button>
      </div>
    </main>
  );
}

export default Profile;
