import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function AuthPage({ isLoginPage, staticContent }) {
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
                  />
                  <span></span>
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
                />
                <span></span>
              </label>
            </fieldset>
            <fieldset className="auth-page__input-wrapper">
              <label className="auth-page__input-title">
                {passwordLabel}
                <input
                  type="password"
                  className="auth-page__input"
                  placeholder={passwordPlaceholder}
                />
                <span></span>
              </label>
            </fieldset>
          </div>
          <button type="submit" className="auth-page__button">
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

AuthPage.propTypes = {
  staticContent: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
    nameLabel: PropTypes.string,
    namePlaceholder: PropTypes.string,
    emailLabel: PropTypes.string.isRequired,
    emailPlaceholder: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    passwordPlaceholder: PropTypes.string.isRequired,
    defaultError: PropTypes.string,
    submitBtn: PropTypes.string.isRequired,
    redirectPrompt: PropTypes.string.isRequired,
    redirectLink: PropTypes.string.isRequired,
  }),
  isRegisterPage: PropTypes.bool.isRequired,
};

export default AuthPage;
