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
