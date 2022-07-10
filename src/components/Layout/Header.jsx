import Logo from "../../media/space_ship.svg";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <img
          alt="Site Brand"
          src={Logo}
          width="100"
          height="35"
          className="d-inline-block align-top"
        />{" "}
        SpaceX INFO
      </Navbar.Brand>
      <Nav id="nav-main" className="me-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav">
            <Link to={"/Accueil"} className="nav-link">
              ACCUEIL
            </Link>
            <Link to={"/Informations"} className="nav-link">
              INFORMATIONS
            </Link>
            <Link to={"/Dernier_lancement"} className="nav-link">
              INFO DERNIER LANCEMENT
            </Link>
            <Link to={"/Missions_historiques"} className="nav-link">
              MISSIONS HISTORIQUES
            </Link>
          </ul>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
};

export default Header;
