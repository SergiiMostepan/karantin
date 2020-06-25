import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
  isAuntificated: state.isAuntificatedState,
});

export default connect(mapStateToProps)(App);
