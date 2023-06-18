import AuthPage from "../AuthPage/AuthPage";
import registerPageContent from "../../utils/registerPageContent";

function Register() {
  return <AuthPage isLoginPage={false} staticContent={registerPageContent} />;
}

export default Register;
