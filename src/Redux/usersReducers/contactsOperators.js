import axios from "axios";
import { usersSlice } from "./contactsReducers";
import { loadingSlice } from "../loading/loadingReducer";
import { errorSlice } from "../error/errorReducer";

export const getItems = (dispatch) => {
  return (dispatch) => {
    dispatch(loadingSlice.actions.isLoading());
    dispatch(usersSlice.actions.getUsersStarted());

    axios
      .get(`http://localhost:3001/contacts`)
      .then((res) => {
        dispatch(usersSlice.actions.getUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.getContactsError(err));
      })
      .finally(() => dispatch(loadingSlice.actions.isLoading()));
  };
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(loadingSlice.actions.isLoading());
  dispatch(usersSlice.actions.deleteUsersStarted());

  axios
    .delete(`http://localhost:3001/contacts/${id}`)
    .then(() => {
      dispatch(usersSlice.actions.deleteUsersSuccess(id));
    })
    .catch((err) => {
      dispatch(errorSlice.actions.deleteContactsError(err));
    })
    .finally(() => dispatch(loadingSlice.actions.isLoading()));
};

export const postContacts = (contactToPost) => (dispatch) => {
  dispatch(loadingSlice.actions.isLoading());
  dispatch(usersSlice.actions.postUsersStarted());

  axios
    .post(`http://localhost:3001/contacts`, contactToPost)
    .then((res) => {
      dispatch(usersSlice.actions.postUsersSuccess(res.data));
    })
    .catch((err) => {
      dispatch(errorSlice.actions.postContactsError(err));
    })
    .finally(() => dispatch(loadingSlice.actions.isLoading()));
};
