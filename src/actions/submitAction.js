import { GET_FINAL } from "./types";
import axios from "axios";

export const getFinal = data => dispatch => {
  //   axios.get("https://findfalcone.herokuapp.com/vehicles").then(res => {
  dispatch({
    type: GET_FINAL,
    data: { test: "test" }
  });
  //   });
};
