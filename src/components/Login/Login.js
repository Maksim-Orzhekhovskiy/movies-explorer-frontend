import AuthPage from "../AuthPage/AuthPage";
import loginPageContent from "../../utils/loginPageContent";

function Login({ onSubmit, submitError, isFormDisabled }) {
  return (
    <AuthPage
      isLoginPage={true}
      staticContent={loginPageContent}
      onSubmit={onSubmit}
      submitError={submitError}
      isFormDisabled={isFormDisabled}
    />
  );
}

export default Login;
