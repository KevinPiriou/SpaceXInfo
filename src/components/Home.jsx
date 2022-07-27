import { Timeline } from "react-twitter-widgets";
import { eagerLoadTwitterLibrary } from "react-twitter-widgets";
import Carousel from "react-bootstrap/Carousel";
import SpaceX1 from "../media/SpaceX1.jpg";
import SpaceX2 from "../media/SpaceX2.jpg";
import SpaceX3 from "../media/SpaceX3.jpg";
const Home = () => {
  eagerLoadTwitterLibrary();
  return (
    <div className="d-flex flex-column">
      <Carousel className="carroussel-section" id="carrou">
        <Carousel.Item>
          <img
            id="img-carroussel"
            className="d-block w-100"
            src={SpaceX1}
            alt="Starlink Mission Pictures"
            height="600"
            fluid
          />
          <Carousel.Caption>
            <div
              className="h1 mb-3 mt-3 fw-normal"
              style={{ color: "#c8ac3d" }}
            >
              First slide label
            </div>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="img-carroussel"
            className="d-block w-100"
            src={SpaceX2}
            alt="Starlink Mission Pictures"
            height="600"
            fluid
          />

          <Carousel.Caption>
            <div
              className="h1 mb-3 mt-3 fw-normal"
              style={{ color: "#c8ac3d" }}
            >
              Second slide label
            </div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="img-carroussel"
            className="d-block w-100"
            src={SpaceX3}
            alt="Starship SuperHeavy Pictures"
            height="600"
            fluid
          />

          <Carousel.Caption>
            <div
              className="h1 mb-3 mt-3 fw-normal"
              style={{ color: "#c8ac3d" }}
            >
              Third slide label
            </div>
            <h3>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="twitter-section">
        <div id="twt-form" className="m-1">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "SpaceX",
            }}
            options={{
              height: "400px",
              width: "auto",
            }}
          />
        </div>

        <div id="twt-form" className="m-1">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "elonmusk",
            }}
            options={{
              height: "400px",
              width: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
