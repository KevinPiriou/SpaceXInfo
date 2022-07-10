import { Card, ListGroup } from "react-bootstrap";
const LastLaunch = ({ lastLaunch }) => {
  let utc = lastLaunch.date_utc;
  let local = lastLaunch.date_local;
  return (
    <div className="justify-content-center">
      <Card style={{ width: "18rem" }} bg="dark" text="center">
        <Card.Body border="secondary">
          <Card.Title>LAST LAUNCH</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              Nom de mission : <span className="info">{lastLaunch.name}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Heure locale et Date de lancement :{" "}
              <span className="info">{local}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Heure UTC et Date de lancement :{" "}
              <span className="info">{utc}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Détails de mission:{" "}
              <span className="info">{lastLaunch.details}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Numéro de vol :
              <span className="info">{lastLaunch.flight_number}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Passagé : <span className="info">{lastLaunch.crew}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Vidéo du vol :{" "}
              <a
                href={lastLaunch.links.webcast}
                target="about_blank"
                className="info-link"
              >
                <span className="info">{lastLaunch.links.webcast}</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Lien Reddit :{" "}
              <a
                href={lastLaunch.links.reddit.launch}
                target="about_blank"
                className="info-link"
              >
                {" "}
                <span className="info">{lastLaunch.links.reddit.launch}</span>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LastLaunch;
