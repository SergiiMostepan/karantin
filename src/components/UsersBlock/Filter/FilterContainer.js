import { connect } from 'react-redux';
import { filterSlice } from '../../../Redux/filterReducers/filterReducers';
import {
  memoizedGetFilterQuery,
  memoizedGetFilterOnChangeQuery,
} from '../../../Redux/filterReducers/filterSelectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  filterState: memoizedGetFilterQuery(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(memoizedGetFilterOnChangeQuery(filterSlice, e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
