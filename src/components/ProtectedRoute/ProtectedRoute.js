import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/movies", { replace: true });
    }
  }, [isLoggedIn]);
  return children;
}

export default ProtectedRoute;
