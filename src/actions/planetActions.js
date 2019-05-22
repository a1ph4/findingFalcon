import { FETCH_PLANETS, SELECT_PLANETS } from "./types";
import axios from "axios";
export const fetchPlanets = () => dispatch => {
  axios.get("https://findfalcone.herokuapp.com/planets").then(res => {
    dispatch({
      type: FETCH_PLANETS,
      data: res.data
    });
  });
};
export const selectPlanets = planet => dispatch => {
  dispatch({
    type: SELECT_PLANETS,
    data: planet
  });
};
export const fetchSelectedPlanets = () => dispatch => {
  dispatch({
    type: "DEFAULT"
  });
};
