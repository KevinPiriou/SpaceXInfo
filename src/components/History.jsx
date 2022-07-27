import { Card } from "react-bootstrap";
const History = ({ history }) => {
  return (
    <div className="m-5">
      <div className="display-6 d-flex justify-content-center m-5 text-dark">
        LISTE DES DIFFERENTES MISSIONS HISTORIQUES
      </div>
      <hr></hr>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 350px)",
          gridGap: "20px 20px",
          gridColumns: "auto",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {history.map((el) => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",

              backgroundImage:
                "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
              border: "solid #005288 2px",
              borderRadius: "35px",

              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
            }}
            className="m-2 info-collapse"
            key={el.id}
          >
            <div
              style={{
                fontSize: "20px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "rgb(9, 191, 236)",
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={el.links.article}
              >
                {el.title}
              </a>
            </div>

            <div>
              <Card.Text> {el.details}</Card.Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;
