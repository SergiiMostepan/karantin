import { connect } from "react-redux";
import { memoizedGetContacts } from "../../../Redux/usersReducers/contactSelectors";
import { postContacts } from "../../../Redux/usersReducers/contactsOperators";
import InputForm from "./InputForm";
import shortid from "shortid";

const mapStateToProps = (state) => ({
  contactState: memoizedGetContacts(state),
  autorizedUser: state.auntificatedUserState,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (state) =>
    dispatch(
      postContacts({
        ...state,
        id: shortid.generate(),
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
