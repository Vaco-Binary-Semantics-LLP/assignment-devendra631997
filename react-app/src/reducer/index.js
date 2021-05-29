import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form';

import teamReducer from "./teamReducer";
import playerReducer from './playerReducer';


const rootReducer = combineReducers({
  team: teamReducer,
  player:playerReducer
});

export default rootReducer;