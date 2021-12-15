import { combineReducers } from 'redux';
import mainReducer from './mainReduce';
const appReducers = combineReducers({
    mainReducer:mainReducer,
  

});

export default appReducers;