import { combineReducers } from "redux";
import planetReducer from "./planetReducer";
import vehicleReducer from "./vehicleReducer";

export default combineReducers({
  planets: planetReducer,
  vehicles: vehicleReducer
});
