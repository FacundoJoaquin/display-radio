import { useEffect, useState } from "react";
import la17 from "../../assets/la17-logo.png";
import "./locutor.css";
import messiImage from "../../assets/messi.png";
import cristianRoldan from "../../assets/cristianRoldan.png";
import christianDevia from "../../assets/christianDevia.png";
import diegoCastro from "../../assets/diegoCastro.png";
import fabioZapata from "../../assets/fabioZapata.png";
import paolaBrossy from "../../assets/paolaBrossy.png";
import robertoSuárez from "../../assets/robertoSuárez.png";

const Locutor = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageToShow, setImageToShow] = useState("");
  const [titleToShow, setTitleToShow] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentHour = currentTime.getHours();

    switch (true) {
      case currentHour >= 7 && currentHour < 10:
        setImageToShow(christianDevia);
        setTitleToShow('EL QUINTO PODER')
        break;
      case currentHour >= 10 && currentHour < 13:
        setImageToShow(cristianRoldan);
        setTitleToShow('LA SEGUNDA MAÑANA')
        break;
      case currentHour >= 13 && currentHour < 16:
        setImageToShow(robertoSuárez);
        setTitleToShow('COTIDIANO')
        break;
      case currentHour >= 16 && currentHour < 18:
        setImageToShow(diegoCastro);
        setTitleToShow('TODO PASA')
        break;
      case currentHour >= 18 && currentHour < 21:
        setImageToShow(fabioZapata);
        setTitleToShow('CRÓNICA DE LA TARDE')
        break;
      case currentHour >= 21 && currentHour < 23:
        setImageToShow(paolaBrossy);
        setTitleToShow('LA NOCHE DEL SUR')
        break;
      default:
        setImageToShow(messiImage);
        break;
    }
  }, [currentTime]);

  return (
    <div className="locutor-container">
      <div className="radio-programa">
        <img src={la17} alt="" />
        <h2>{titleToShow}</h2>
      </div>
      <img src={imageToShow} className="locutor-img" alt="locutor" />
    </div>
  );
};

export default Locutor;
