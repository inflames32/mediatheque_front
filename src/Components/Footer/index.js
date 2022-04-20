import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearState } from "../../store/action";
import "../../styles/footer.css";

const Footer = ({ clearState }) => {
  const handleClearState = () => {
    clearState();
  };
  return (
    <div className="text-black-400  footer fixed bottom-0 left-0 flex h-10 w-full items-center justify-around border-t-2 bg-white text-xl">
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
