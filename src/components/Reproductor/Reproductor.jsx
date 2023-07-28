import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import "./reproductor.css";
import { useRef, useState } from "react";

const Reproductor = () => {
  const audioRef = useRef(null);
  console.log(audioRef);
  const [volume, setVolume] = useState(1);

  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const getSliderBackground = () => {
    const percentage = ((volume - 0) / (2 - 0)) * 100;
    return `linear-gradient(to right, #DC202A ${percentage}%, #C3C7C6 ${percentage}%)`;
  };

  return (
    <div className="reproductor-container">
      <audio ref={audioRef} controls>
        <source src="https://radios.lu17.com:8401/livehd" type="audio/mpeg" />
      </audio>
      <div className="volume-bar-container">
        <input
          className="volume-controller"
          type="range"
          min="0"
          max="2"
          step="0.2"
          value={volume}
          onChange={handleVolumeChange}
          style={{ background: getSliderBackground() }}
        />
      </div>

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
