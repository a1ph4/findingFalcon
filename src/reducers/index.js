import { combineReducers } from "redux";
import planetReducer from "./planetReducer";
import vehicleReducer from "./vehicleReducer";
import timeReducer from "./timeReducer";
import resultReducer from "./resultReducer";

export default combineReducers({
  planets: planetReducer,
  vehicles: vehicleReducer,
  time: timeReducer,
  result: resultReducer
});
