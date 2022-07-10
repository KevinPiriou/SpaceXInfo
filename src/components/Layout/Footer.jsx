import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Navbar bg="dark" className="fixed-bottom">
      <Container>
        <div className="wrap text-center">
          <a
            className="hover-fx"
            href="https://github.com/KevinPiriou"
            target="about_blank"
            id="github"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          Github
        </div>
        <div className="vr"></div>
        <div className="row text-center">
          <p>Réalisé par Kévin Piriou à la demande d'Elon Musk lui même.</p>
          <p>Copyright © 2022 MIT | Projet Portfolio </p>
        </div>
        <div className="vr"></div>
        <div className="wrap text-center">
          <a
            className="hover-fx"
            href="https://www.linkedin.com/in/kevin-piriou/"
            target="about_blank"
            id="linkedin"
          >
            <FontAwesomeIcon icon="fab fa-linkedin" />
          </a>
          Linkedin
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
