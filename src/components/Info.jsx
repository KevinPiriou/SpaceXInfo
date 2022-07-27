import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

const Info = ({ info }) => {
  return (
    <Container fluid className="d-flex justify-content-center mt-5">
      <ListGroup>
        <ListGroupItem variant="dark" className="li-info">
          NOM : {info.name}
        </ListGroupItem>
        <ListGroupItem className="li-info">
          ADRESSE : {info.headquarters.address}
        </ListGroupItem>
        <ListGroupItem variant="dark" className="li-info">
          VILLE : {info.headquarters.city}
        </ListGroupItem>
        <ListGroupItem className="li-info">
          REGION : {info.headquarters.state}
        </ListGroupItem>
        <ListGroupItem variant="dark" className="li-info">
          SITE INTERNET :
          <a
            href={info.links.website}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.website}
          </a>
        </ListGroupItem>
        <ListGroupItem className="li-info">
          {" "}
          FLICKR :
          <a
            href={info.links.flickr}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.flickr}
          </a>
        </ListGroupItem>
        <ListGroupItem variant="dark" className="li-info">
          {" "}
          TWITTER :
          <a
            href={info.links.twitter}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.twitter}
          </a>
        </ListGroupItem>
        <ListGroupItem className="li-info">
          TWITTER ELON MUSK :
          <a
            href={info.links.elon_twitter}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.elon_twitter}
          </a>
        </ListGroupItem>
        <ListGroupItem variant="dark" className="li-info">
          DATE DE CREATION : {info.founded}
        </ListGroupItem>
        <ListGroupItem className="li-info">
          NOMBRE EMPLOYE : {info.employees}
        </ListGroupItem>

        <ListGroupItem variant="dark" className="li-info">
          SITE DE LANCEMENT : {info.launch_sites}
        </ListGroupItem>
        <ListGroupItem className="li-info">
          SITE DE TEST : {info.test_sites}
        </ListGroupItem>
        <ListGroupItem variant="dark" className="li-info">
          FONCTION : {info.summary}
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default Info;
