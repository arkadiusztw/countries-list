import { combineReducers } from "redux";
import { dataReducer } from "./reducers/countriesReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
});
