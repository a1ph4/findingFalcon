import { FETCH_VEHICLES, SELECT_VEHICLES } from "../actions/types";

const initialState = {
  allvehicles: [],
  selectedVehicles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VEHICLES:
      console.log(action.data);
      return {
        ...state,
        allvehicles: action.data
      };
    default:
      return state;
  }
}
