import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import "./reproductor.css";
import { useRef } from "react";

const Reproductor = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  }
  const handlePause = () => {
    audioRef.current.pause();
  }

  return (
    <div className="reproductor-container">
      <audio ref={audioRef} controls>
        <source src="https://radios.lu17.com:8401/livehd" type="audio/mpeg" />
      </audio>
      <div className="reproductor-controller">
        <img
          src={pause}
          alt=""
          onClick={handlePause}
          style={{ cursor: "pointer" }}
        />
        <img
          src={play}
          alt=""
          onClick={handlePlay}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Reproductor;
