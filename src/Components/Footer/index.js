import { Link } from "react-router-dom";
import "../../Styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <Link to="/" className="logo">
          Accueil
        </Link>
        <span>
          <a href="https://github.com/inflames32" className="github">
            Creé par Inflames32
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
