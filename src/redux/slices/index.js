import {combineReducers} from 'redux';
import loginSlice from './loginSlice';

export const combinedReducer = combineReducers({
  loginSlice,
});
