import { Link } from "react-router-dom";

function AccountButton() {
  return (
    <Link className="account-button" to="/profile">
      <p className="account-button__name">Аккаунт</p>
      <div className="account-button__icon"></div>
    </Link>
  );
}

export default AccountButton;
