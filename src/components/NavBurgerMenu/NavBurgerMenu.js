import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AccountButton from "../AccountButton/AccountButton";

function NavBurgerMenu({ isOpen, onClose, onOverlayClick }) {
  return (
    <div
      className={`burger ${isOpen && "burger_open"}`}
      onClick={onOverlayClick}
    >
      <div className="burger__content">
        <button className="burger__close" type="button" onClick={onClose} />
        <nav className="burger__navigation">
          <div className="burger__navigation-links">
            <NavLink to="/" className="burger__link" onClick={onClose}>
              Главная
            </NavLink>
            <NavLink to="/movies" className="burger__link" onClick={onClose}>
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="burger__link"
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink to="/profile" className="burger__navigation-account-link" onClick={onClose}>
            <AccountButton />
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

NavBurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default NavBurgerMenu;
