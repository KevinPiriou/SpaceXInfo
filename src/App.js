import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import LastLaunch from "./components/LastLaunch";
import Header from "./components/Layout/Header";
import Info from "./components/Info";
import History from "./components/History";
import Footer from "./components/Layout/Footer";
import Intro from "./components/Intro";

function App() {
  const [lastLaunch, setLastLaunch] = useState([]);
  const [history, setHistory] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => response.data)
      .then((data) => {
        setLastLaunch(data);
      });
    axios
      .get("https://api.spacexdata.com/v4/history")
      .then((response) => response.data)
      .then((data) => {
        setHistory(data);
      });
    axios
      .get("https://api.spacexdata.com/v4/company")
      .then((response) => response.data)
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/Accueil" element={<Home />}></Route>
          <Route path="/Informations" element={<Info info={info} />}></Route>
          <Route
            path="/Dernier_lancement"
            element={<LastLaunch lastLaunch={lastLaunch} />}
          ></Route>
          <Route
            path="/Missions_historiques"
            element={<History history={history} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
