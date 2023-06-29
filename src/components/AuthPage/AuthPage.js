import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { INPUT_OPTIONS } from "../../utils/constants";

function AuthPage({
  isLoginPage,
  staticContent,
  onSubmit,
  submitError,
  isFormDisabled,
}) {
  const logoClassName = "auth-page__logo";
  const {
    greeting,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    submitBtn,
    redirectPrompt,
    redirectLink,
  } = staticContent;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
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

  function onSubmitForm() {
    const { name, email, password } = userData;

    if (!isLoginPage) {
      onSubmit(email, password, name);
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    }

    if (isLoginPage) {
      onSubmit(email, password);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-page__content">
        <div className="auth-page__head">
          <Logo className={logoClassName} />
          <h1 className="auth-page__title">{greeting}</h1>
        </div>
        <form
          className={`auth-page__form ${
            isLoginPage && "auth-page__form_hight-gap"
          }`}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="auth-page__input-list">
            {!isLoginPage && (
              <fieldset className="auth-page__input-wrapper">
                <label className="auth-page__input-title">
                  {nameLabel}
                  <input
                    type="text"
                    className="auth-page__input"
                    placeholder={namePlaceholder}
                    {...register("name", {
                      ...INPUT_OPTIONS.name,
                      onChange: handleChange,
                    })}
                    value={userData.name || ""}
                    required
                    minLength={2}
                    maxLength={30}
                    name="name"
                  />
                  <span className="auth-page__error">
                    {errors.name ? errors.name.message : ""}
                  </span>
                </label>
              </fieldset>
            )}
            <fieldset className="auth-page__input-wrapper">
              <label className="auth-page__input-title">
                {emailLabel}
                <input
                  type="email"
                  className="auth-page__input"
                  placeholder={emailPlaceholder}
                  {...register("email", {
                    ...INPUT_OPTIONS.email,
                    onChange: handleChange,
                  })}
                  value={userData.email || ""}
                  required
                  name="email"
                />
                <span className="auth-page__error">
                  {errors.email ? errors.email.message : ""}
                </span>
              </label>
            </fieldset>
            <fieldset className="auth-page__input-wrapper">
              <label className="auth-page__input-title">
                {passwordLabel}
                <input
                  type="password"
                  className={`auth-page__input ${
                    submitError && "auth-page__input_red"
                  }}`}
                  placeholder={passwordPlaceholder}
                  {...register("password", {
                    ...INPUT_OPTIONS.password,
                    onChange: handleChange,
                  })}
                  value={userData.password || ""}
                  required
                  minLength={6}
                  name="password"
                />
                <span className="auth-page__error">
                  {errors.password ? errors.password.message : ""}
                </span>
              </label>
            </fieldset>
          </div>
          <button
            type="submit"
            className={`auth-page__button ${
              (!isValid || !isDirty || isFormDisabled) &&
              "auth-page__button_disabled"
            }`}
            disabled={!isValid || !isDirty || isFormDisabled}
          >
            {submitBtn}
          </button>
        </form>
        <p className="auth-page__link-container">
          {redirectPrompt}{" "}
          <Link
            className="auth-page__link"
            to={isLoginPage ? "/signup" : "/signin"}
          >
            {redirectLink}
          </Link>
        </p>
      </div>
    </main>
  );
}

export default AuthPage;
