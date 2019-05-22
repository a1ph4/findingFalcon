import { GET_FINAL } from "../actions/types";

const initialState = {
  result: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FINAL:
      return {
        ...state,
        result: action.data
      };
    default:
      return state;
  }
}
