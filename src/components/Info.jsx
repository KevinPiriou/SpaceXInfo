import { ListGroup } from "react-bootstrap";
import React from "react";

const Info = ({ info }) => {
  return (
    <div>
      <ListGroup>
        <li className="li-info">NOM : {info.name}</li>
        <li className="li-info">ADRESSE :{info.headquarters.address}</li>
        <li className="li-info">VILLE : {info.headquarters.city}</li>
        <li className="li-info">REGION : {info.headquarters.state}</li>
        <li className="li-info">
          SITE INTERNET :
          <a
            href={info.links.website}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.website}
          </a>
        </li>
        <li className="li-info">
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
        </li>
        <li className="li-info">
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
        </li>
        <li className="li-info">
          TWITTER ELON MUSK :
          <a
            href={info.links.elon_twitter}
            target="about_blank"
            className="info-link"
          >
            {" "}
            {info.links.elon_twitter}
          </a>
        </li>
        <li className="li-info">DATE DE CREATION : {info.founded}</li>
        <li className="li-info">NOMBRE EMPLOYER : {info.employees}</li>

        <li className="li-info">SITE DE LANCEMENT : {info.launch_sites}</li>
        <li className="li-info">SITE DE TEST : {info.test_sites}</li>
        <li className="li-info">FONCTION : {info.summary}</li>
      </ListGroup>
    </div>
  );
};

export default Info;
