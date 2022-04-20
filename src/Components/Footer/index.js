import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearState } from "../../store/action";
import "../../styles/footer.css";

const Footer = ({ clearState }) => {
  const handleClearState = () => {
    clearState();
  };
  return (
    <div className="footer">
      <a
        href="https://github.com/inflames32"
        className=" text-current hover:text-blue-400"
      >
        Crée par Pierre Cahuzac
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
