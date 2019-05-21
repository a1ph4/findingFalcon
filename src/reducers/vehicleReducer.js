import { FETCH_VEHICLES, SELECT_VEHICLES } from "../actions/types";

const initialState = {
  allvehicles: [],
  selectedVehicles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VEHICLES:
      return {
        ...state,
        allvehicles: action.data
      };
    case SELECT_VEHICLES:
      let selectedVehicles = [...state.selectedVehicles];
      selectedVehicles.push(action.data);
      console.log(selectedVehicles, state.selectedVehicles);
      return {
        ...state,
        selectedVehicles
      };
    default:
      return state;
  }
}
