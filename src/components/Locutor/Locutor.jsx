import { useEffect, useState } from "react";
import la17 from "../../assets/la17-logo.png";
import "./locutor.css";
import messiImage from "../../assets/messi.png";
import diegoCastro from "../../assets/diegoCastro.png";
import fabioZapata from "../../assets/fabioZapata.png";
import elQuintoPoder from "../../assets/elQuintoPoder.png";
import segundaManana from "../../assets/segundaManana.png";
import Cotidiano from "../../assets/Cotidiano.png";
import laNocheDelSur from "../../assets/laNocheDelSur.png";
import laGranManana from "../../assets/laGranManana.png";
import fondoNegro from "../../assets/fondoNegro.jpg";
import fondoFutbol from "../../assets/fondoFutbol.jpg";

const Locutor = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageToShow, setImageToShow] = useState("");
  const [titleToShow, setTitleToShow] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const dayOfWeekName = daysOfWeek[currentTime.getDay()];
    setCurrentDay(dayOfWeekName);
    console.log(currentDay);
  }, [currentTime, currentDay]);

  useEffect(() => {
    const currentHour = currentTime.getHours();

    if (currentDay && currentDay !== "Sábado" && currentDay !== "Domingo") {
      switch (true) {
        case currentHour >= 7 && currentHour < 10:
          setImageToShow(elQuintoPoder);
          setTitleToShow("EL QUINTO PODER");
          break;
        case currentHour >= 10 && currentHour < 13:
          setImageToShow(segundaManana);
          setTitleToShow("LA SEGUNDA MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 16:
          setImageToShow(fondoFutbol);
          setTitleToShow("COTIDIANO");
          console.log(imageToShow)
          break;
        case currentHour >= 16 && currentHour < 18:
          setImageToShow(diegoCastro);
          setTitleToShow("TODO PASA");
          break;
        case currentHour >= 18 && currentHour < 21:
          setImageToShow(fabioZapata);
          setTitleToShow("CRÓNICA DE LA TARDE");
          break;
        case currentHour >= 21 && currentHour < 23:
          setImageToShow(laNocheDelSur);
          setTitleToShow("LA NOCHE DEL SUR");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Sábado") {
      switch (true) {
        case currentHour >= 9 && currentHour < 13:
          setImageToShow(laGranManana);
          setTitleToShow("LA GRAN MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(messiImage); //VA RAUL PASARIN, NO ESTA SU FOTO
          setTitleToShow("LA VOZ DE LA MESETA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(messiImage); //VA IMAGEN DE FUTBOL EN LA17
          setTitleToShow("FUTBOL EN #LA17");
          break;
        case currentHour >= 21 && currentHour < 24:
          setImageToShow(messiImage);
          setTitleToShow("RADIO MITRE");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Domingo") {
      switch (true) {
        case currentHour >= 9 && currentHour < 12:
          setImageToShow(messiImage); //VA IMAGEN DE JULIO BALDA
          setTitleToShow("ASÍ ES LA VIDA");
          break;
        case currentHour >= 12 && currentHour < 13:
          setImageToShow(messiImage); //DICE RESUMEN
          setTitleToShow("PASAN COSAS");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(fabioZapata);
          setTitleToShow("LA HORA DE ESPAÑA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(fabioZapata); //IMAGEN DE FUTBOL
          setTitleToShow("FUTBOL EN #LA17");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    }
  }, [currentTime, currentDay]);

  return (
    <div className="locutor-container">
      <div className="radio-programa">
        <img src={la17} alt="" />
        <h2>{titleToShow}</h2>
      </div>
      <img
        src={imageToShow}
        className="locutor-img"
        alt="locutor"
        style={{
          width:
            imageToShow === "/assets/fondoNegro-6143a874.jpg" ? "100%" : "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Locutor;
