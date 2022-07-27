const LastLaunch = ({ lastLaunch }) => {
  let utc = lastLaunch.date_utc;
  let local = lastLaunch.date_local;

  return (
    <div className="justify-content-center">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
          border: "solid #005288 2px",
          borderRadius: "35px",

          boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
          fontSize: "20px",
        }}
        className="m-5 p-5"
      >
        <div className="display-6 d-flex justify-content-center">
          Information sur le dernier lancement
        </div>
        <hr></hr>
        <div>
          <div className="m-2">
            Nom de mission :{" "}
            <span style={{ color: "#005288" }}>{lastLaunch.name}</span>
          </div>
          <div className="m-2">
            Heure locale et Date de lancement :{" "}
            <span style={{ color: "#005288" }}>{local}</span>
          </div>
          <div className="m-2">
            Heure UTC et Date de lancement :{" "}
            <span style={{ color: "#005288" }}>{utc}</span>
          </div>
          <div className="m-2">
            Détails de mission:{" "}
            <span style={{ color: "#005288" }}>{lastLaunch.details}</span>
          </div>
          <div className="m-2">
            Numéro de vol :{" "}
            <span style={{ color: "#005288" }}>{lastLaunch.flight_number}</span>
          </div>
          <div className="m-2">
            Passagé :{" "}
            <span style={{ color: "#005288" }}>{lastLaunch.crew}</span>
          </div>
          <div className="m-2">
            Vidéo du vol :{" "}
            <a
              href={lastLaunch.links.webcast}
              target="about_blank"
              className="info-link"
            >
              <span className="info">{lastLaunch.links.webcast}</span>
            </a>
          </div>
          <div className="m-2">
            Lien Reddit :{" "}
            <a
              href={lastLaunch.links.reddit.launch}
              target="about_blank"
              className="info-link"
            >
              {" "}
              <span className="info">{lastLaunch.links.reddit.launch}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastLaunch;
