import la17 from "../../assets/la17.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-component">
       <div className="img-footer-container">
        <img src={la17} alt="" />
        <p>www.lu17.com</p>
        <div className="redes-container">
            <img className="redes" src={facebook} alt="" />
            <img className="redes" src={twitter} alt="" />
            <img className="redes" src={instagram} alt="" />
            <img className="redes" src={tiktok} alt="" />
            <img className="redes" src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
