import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const InitialState = Immutable.fromJS({
    filter: ''
});

const gym = handleActions({
  SHOW_FILTER: (state, { filter }) => {
   return state.set('filter', filter)
  }
}, InitialState);

export default gym;
