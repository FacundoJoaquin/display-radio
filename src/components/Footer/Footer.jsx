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
        <div className="redes-container">
          <p>www.lu17.com</p>
          <div className="redes-logos-div">
            <img className="redes" src={facebook} alt="facebook" />
            <img className="redes" src={twitter} alt="twitter" />
            <img className="redes" src={instagram} alt="instagram" />
            <img className="redes" src={tiktok} alt="tiktok" />
            <img className="redes" src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
