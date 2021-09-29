import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../Styles/footer.scss";
import { clearState } from "../../store/action";

const Footer = ({ clearState }) => {
  const handleClearState = () => {
    clearState();
  };
  return (
    <div className="footer">
      <Link to="/" className="footer__home" onClick={handleClearState}>
        Accueil
      </Link>

      <a href="https://github.com/inflames32" className="footer__github">
        Me contacter
      </a>
    </div>
  );
};

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  clearState: () => {
    dispatch(clearState());
  },
});

export default connect(mapState, mapDispatch)(Footer);
