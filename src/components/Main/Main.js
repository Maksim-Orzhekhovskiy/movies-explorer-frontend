import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";

function Main() {
  return (
    <main className="page-content">
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
    </main>
  );
}

export default Main;
