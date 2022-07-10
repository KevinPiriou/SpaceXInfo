import { Card } from "react-bootstrap";
const History = ({ history }) => {
  return (
    <div className="mb-5">
      <div className="h3 mb-3 mt-3 fw-normal text-center" id="history">
        LISTE DE DIFFERENTES MISSIONS HISTORIQUES
      </div>
      <div className="history-list">
        {history.map((el) => (
          <Card
            id="histo-card"
            className="bg-dark text-white"
            border="warning"
            bg="secondary"
            style={{ width: "250px", padding: "15px" }}
            key={el.id}
          >
            <Card.Title>
              <a
                className="hist-link"
                target="_blank"
                rel="noopener noreferrer"
                href={el.links.article}
              >
                {el.title}
              </a>
            </Card.Title>
            <Card.Body>
              <Card.Text> {el.details}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;
