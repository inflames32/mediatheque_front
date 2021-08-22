import { Link } from "react-router-dom";
import "../../Styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <Link to="/" className="logo">
          Ma médiathèque
        </Link>
        <span className="at">©2021 created by </span>
        <span>
          <a href="https://github.com/inflames32" className="github">
            Inflames32
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
