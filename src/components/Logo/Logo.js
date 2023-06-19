import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo({ className }) {
  return (
    <Link to="/" className="logo-wrapper">
      <img src={logo} alt="Логотип сайта" className={className} />
    </Link>
  );
}

export default Logo;
