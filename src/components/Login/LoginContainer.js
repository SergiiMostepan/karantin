import { connect } from "react-redux";
import {
  isAuntificatedSlice,
  AuntificatedUserSlice,
} from "../../Redux/isAuntefReducer/isAuntedReducer";
import Login from "./Login";

// const mapStateToProps = (state) => ({
//   contactState: state,
// });

const mapDispatchToProps = (dispatch) => ({
  autentificate: () => dispatch(isAuntificatedSlice.actions.auntentificate()),
  autentificatedUser: (userName) =>
    dispatch(AuntificatedUserSlice.actions.autentifiedUser(userName)),
});

export default connect(null, mapDispatchToProps)(Login);
