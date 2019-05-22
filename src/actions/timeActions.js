import { GET_TIME, UPDATE_TIME } from "./types";
export const getTime = () => dispatch => {
  dispatch({
    type: GET_TIME,
    data: 0
  });
};
export const updateTime = data => dispatch => {
  dispatch({
    type: UPDATE_TIME,
    data: data
  });
};
