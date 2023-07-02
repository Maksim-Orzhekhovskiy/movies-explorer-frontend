import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import CurrentUserContext from "../../context/CurrentUserContext";
import { INPUT_OPTIONS } from "../../utils/constants";

function Profile({
  onSubmit,
  onSignout,
  successEditMsg,
  submitError,
  isFormDisabled,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleChangeUserData = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const submitBtnDisabled =
    !isDirty ||
    !isValid ||
    isFormDisabled ||
    (userData.name === currentUser.name &&
      userData.email === currentUser.email);
  const errorMessage = `${errors.name ? errors.name.message : ""} ${
    errors.email ? errors.email.message : ""
  }`;
  const statusMessage = successEditMsg || submitError;

  const onSubmitForm = () => {
    const { name, email } = userData;

    onSubmit(name, email);
  };

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, {currentUser.name}</h2>
        <form className="profile__form" onSubmit={handleSubmit(onSubmitForm)}>
          <fieldset className="profile__input-wrapper">
            <label className="profile__input-title">Имя</label>
            <input
              className="profile__input"
              placeholder="Максим"
              defaultValue={userData.name}
              {...register("name", {
                ...INPUT_OPTIONS.name,
                onChange: handleChangeUserData,
              })}
            />
          </fieldset>
          <fieldset className="profile__input-wrapper">
            <label className="profile__input-title">E-mail</label>
            <input
              className="profile__input"
              placeholder="pochta@yandex.ru"
              defaultValue={userData.email}
              {...register("email", {
                ...INPUT_OPTIONS.email,
                onChange: handleChangeUserData,
              })}
            />
          </fieldset>
          <span className="profile__input-error">
            {errorMessage} {statusMessage}
          </span>
          <button
            className="profile__button-edit"
            disabled={submitBtnDisabled}
            type="submit"
          >
            Редактировать
          </button>
        </form>
        <button className="profile__button-logout" onClick={onSignout}>
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
