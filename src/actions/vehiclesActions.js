import { FETCH_VEHICLES, SELECT_VEHICLES, SELECTED_VEHICLES } from "./types";
import axios from "axios";
export const fetchVehicles = () => dispatch => {
  axios.get("https://findfalcone.herokuapp.com/vehicles").then(res => {
    dispatch({
      type: FETCH_VEHICLES,
      data: res.data
    });
  });
};
export const selectVehicle = (planet, vehicle) => dispatch => {
  dispatch({
    type: SELECT_VEHICLES,
    planet: planet,
    data: vehicle
  });
};
export const fetchSelectedVehicle = () => dispatch => {
  console.log("Called");
  dispatch({
    type: SELECTED_VEHICLES
  });
};
