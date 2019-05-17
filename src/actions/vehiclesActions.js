import { FETCH_VEHICLES, SELECT_VEHICLES } from "./types";
import axios from "axios";
export const fetchVehicles = () => dispatch => {
  axios.get("https://findfalcone.herokuapp.com/vehicles").then(res => {
    console.log("vehicles");
    dispatch({
      type: FETCH_VEHICLES,
      data: res.data
    });
  });
};
