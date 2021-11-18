import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearState } from "../../store/action";

const Footer = ({ clearState }) => {
  const handleClearState = () => {
    clearState();
  };
  return (
    <div className="w-full  text-xl fixed bottom-0 left-0 bg-white text-black-400 h-10 flex justify-around items-center border-t-2">
      <Link
        to="/"
        className="no-underline text-black-400 hover:text-blue-400  text-current"
        onClick={handleClearState}
      >
        Accueil
      </Link>
      <a
        href="https://github.com/inflames32"
        className="no-underline hover:text-blue-400 text-current"
      >
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
