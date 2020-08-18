import { combineReducers } from 'redux';
import valutes from './valutes';
import singleValute from './singleValute';

export default combineReducers({
  valutes,
  singleValute,
});
