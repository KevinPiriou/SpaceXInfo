import { Button } from "bootstrap";
import Video from "../../src/media/StarshipAnimation.mp4";
const Intro = () => {
  return (
    <div id="intro">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
