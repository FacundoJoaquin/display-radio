import "./reproductor.css";
import { useRef, useState } from "react";
import Pause from "../Buttons/Pause";
import Play from "../Buttons/Play";

const Reproductor = () => {
  const audioRef = useRef(null);
  console.log(audioRef);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para rastrear la reproducción

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true); // Actualizar el estado a true cuando empieza a reproducirse
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false); // Actualizar el estado a false cuando se pausa la reproducción
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
        <Pause onClick={handlePause} isPlaying={isPlaying} />
        <Play onClick={handlePlay} isPlaying={isPlaying} />
      </div>
    </div>
  );
};

export default Reproductor;
