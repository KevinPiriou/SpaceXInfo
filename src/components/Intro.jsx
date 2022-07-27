import srcVideo from "../../src/media/StarshipAnimation.mp4";

const Intro = () => {
  return (
    <div id="intro" className="mt-4">
      <video
        className="responsive-iframe"
        autoPlay
        loop
        muted
        src={srcVideo}
        style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      ></video>
    </div>
  );
};

export default Intro;
