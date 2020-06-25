import { connect } from "react-redux";
import { deleteContact } from "../../../Redux/usersReducers/contactsOperators";
import UseerItem from "./UserItem";

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(UseerItem);
