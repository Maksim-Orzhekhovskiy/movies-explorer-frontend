import { NavLink } from "react-router-dom";

import AccountButton from "../AccountButton/AccountButton";
import AuthBlock from "../AuthBlock/AuthBlock";
function Navigation({ isLoggedIn }) {
  const navigationClass = `navigation ${isLoggedIn && "navigation-movies"}`;
  return (
    <nav className={navigationClass}>
      {isLoggedIn ? (
        <>
          <div className="navigation__links">
            <NavLink
              className="navigation__link navigation__link-movies"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
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

export default Navigation;
