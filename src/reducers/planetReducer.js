import { FETCH_PLANETS, SELECT_PLANETS } from "../actions/types";

const initialState = {
  allplanets: [],
  selectedPlanet: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        allplanets: action.data
      };
    default:
      return state;
  }
}
