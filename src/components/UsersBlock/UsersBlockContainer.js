import { memoizedGetContacts } from "../../Redux/usersReducers/contactSelectors";
import { memoizedGetFilterQuery } from "../../Redux/filterReducers/filterSelectors";
import { getItems } from "../../Redux/usersReducers/contactsOperators";
import { connect } from "react-redux";
import UsersBlock from "./UsersBlock";

const mapStateToProps = (state) => ({
  contactState: memoizedGetContacts(state),
  filterState: memoizedGetFilterQuery(state),
});

const MDTP = (dispatch) => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, MDTP)(UsersBlock);
