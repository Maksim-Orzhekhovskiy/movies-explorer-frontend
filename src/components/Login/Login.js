import AuthPage from "../AuthPage/AuthPage";
import loginPageContent from "../../utils/loginPageContent";

function Login() {
  return <AuthPage isLoginPage={true} staticContent={loginPageContent} />;
}

export default Login;
