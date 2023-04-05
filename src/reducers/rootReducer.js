//import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
import dataReducer from "../slices/data";

import uiReducer from "../slices/ui";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
})

export default rootReducer