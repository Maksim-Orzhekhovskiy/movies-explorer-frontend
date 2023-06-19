import { Link } from "react-router-dom";

function AuthBlock() {
  return (
    <div className="auth-block">
      <Link className="auth-block__link-signup" to="/signup">
        Регистрация
      </Link>
      <Link className="auth-block__link-signin" to="/signin">
        Войти
      </Link>
    </div>
  );
}
export default AuthBlock;
