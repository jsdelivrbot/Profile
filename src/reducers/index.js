import {combineReducers} from 'redux';
import ReducerContent from './reducer_content';

const rootReducers = combineReducers({
  content:ReducerContent
});

export default rootReducers;
