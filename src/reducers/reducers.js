import {ACTIVATE_GEOD, CLOSE_GEOD} from '../actions/actions';
import {combineReducers} from 'redux';

// reducers.js
const geod = (state = {}, action) => {  
    switch (action.type) {
      case ACTIVATE_GEOD:
        return action.geod;
      case CLOSE_GEOD:
        return {};
      default:
        return state;
    }
  };

const reducers = combineReducers({  
    geod,
});
  
export default reducers;