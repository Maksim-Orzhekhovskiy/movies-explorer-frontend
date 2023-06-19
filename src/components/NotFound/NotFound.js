import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <h1 className="not-found__error-code">404</h1>
      <p className="not-found__error-message">Страница не найдена</p>
      <button className="not-found__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
