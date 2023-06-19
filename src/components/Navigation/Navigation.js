import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import AccountButton from "../AccountButton/AccountButton";
import AuthBlock from "../AuthBlock/AuthBlock";
function Navigation({ isLoggedIn }) {
  const navigationClass = `navigation ${isLoggedIn && "navigation-movies"}`;
  return (
    <nav className={navigationClass}>
      {isLoggedIn ? (
        <>
          <div className="navigation__links">
            {" "}
            <NavLink
              exact
              className="navigation__link navigation__link-movies"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              exact
              className="navigation__link navigation__link-movies"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink className="navigation__link" to="/profile">
            <AccountButton />
          </NavLink>
        </>
      ) : (
        <>
          <AuthBlock />
        </>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
