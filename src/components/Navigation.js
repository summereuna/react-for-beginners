import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <section className="nav__logo">
        <img alt="logo" title="logo" src={logo} className="sm" />
      </section>
      <section className="nav__container">
        <span>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </span>
        <span>
          <Link to={`${process.env.PUBLIC_URL}/`}>About</Link>
        </span>
      </section>
    </nav>
  );
}

export default Navigation;
