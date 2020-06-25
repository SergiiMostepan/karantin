import { connect } from "react-redux";
import { isAuntificatedSlice } from "../../Redux/isAuntefReducer/isAuntedReducer";
import Header from "./Header";

const mapStateToProps = (state) => ({
  isAuntificated: state.isAuntificatedState,
});

const mapDispatchToProps = (dispatch) => ({
  autentificate: () => dispatch(isAuntificatedSlice.actions.auntentificate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
