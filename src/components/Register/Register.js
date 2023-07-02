import AuthPage from "../AuthPage/AuthPage";
import registerPageContent from "../../utils/registerPageContent";

function Register({ onSubmit, submitError, isFormDisabled }) {
  return (
    <AuthPage
      isLoginPage={false}
      staticContent={registerPageContent}
      onSubmit={onSubmit}
      submitError={submitError}
      isFormDisabled={isFormDisabled}
    />
  );
}

export default Register;
