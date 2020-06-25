import memoize from "memoizee";

const getUsers = (state) => state.contactState;

export const memoizedGetContacts = memoize(getUsers);
