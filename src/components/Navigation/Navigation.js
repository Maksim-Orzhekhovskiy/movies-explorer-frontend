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
              activeClassName="navigation__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              exact
              className="navigation__link navigation__link-movies"
              activeClassName="navigation__link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </div>

          <AccountButton />
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
