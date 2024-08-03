import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import "./Home.css";
import Button from "../components/form/button/Button";
function Home(props) {
  return (
    <>
      <section className="core-section">
        <Navigation />
        <div className="container">
          <div className="form">{props.children}</div>
        </div>
      </section>
    </>
  );
}
export default Home;
