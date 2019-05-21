import { GET_TIME, UPDATE_TIME } from "../actions/types";

const initialState = {
  time: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: action.data
      };
    default:
      return state;
  }
}
