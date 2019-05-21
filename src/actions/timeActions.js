import { GET_TIME, UPDATE_TIME } from "./types";
export const getTime = () => dispatch => {
  dispatch({
    type: GET_TIME,
    data: 0
  });
};
