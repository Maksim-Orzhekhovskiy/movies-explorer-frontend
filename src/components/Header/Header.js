import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import NavBurgerMenu from "../NavBurgerMenu/NavBurgerMenu";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleCloseBurger() {
    setIsBurgerOpen(false);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      setIsBurgerOpen(false);
    }
  }
  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderBackgroundColor("#F3C1F8");
    } else {
      setHeaderBackgroundColor("#fff");
    }
  }, [location.pathname]);

  return (
    <header
      className="header"
      style={{ backgroundColor: headerBackgroundColor }}
    >
      <div className="header__content">
        <Logo className="header__logo" />
        <NavBurgerMenu
          isOpen={isBurgerOpen}
          onClose={handleCloseBurger}
          onOverlayClick={handleOverlayClick}
        />
        {isLoggedIn ? (
          <>
            <Navigation isLoggedIn={isLoggedIn} />
            <button className="header__burger" onClick={handleBurgerClick} />
          </>
        ) : (
          <Navigation isLoggedIn={isLoggedIn} />
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
