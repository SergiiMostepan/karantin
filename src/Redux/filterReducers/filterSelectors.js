import memoize from 'memoizee';

const getFilterQuery = state => state.filterState;
export const memoizedGetFilterQuery = memoize(getFilterQuery);
const getFilterOnChangeQuery = (reducer, query) =>
  reducer.actions.changeQuery(query);
export const memoizedGetFilterOnChangeQuery = memoize(getFilterOnChangeQuery);
