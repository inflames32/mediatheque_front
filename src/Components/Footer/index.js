import { Link } from "react-router-dom";
import "../../Styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer__home">
        Accueil
      </Link>

      <a href="https://github.com/inflames32" className="footer__github">
        Me contacter
      </a>
    </div>
  );
};

export default Footer;
