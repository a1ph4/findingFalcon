import {
  FETCH_VEHICLES,
  SELECT_VEHICLES,
  SELECTED_VEHICLES
} from "../actions/types";

const initialState = {
  allvehicles: [],
  selectedVehicles: [],
  selectedVehiclesList: []
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
      let selectedVehiclesList = [];
      let done = false;
      selectedVehicles.forEach(el => {
        if (el[action.planet]) {
          el[action.planet] = action.data;
          done = true;
          return;
        }
      });
      if (selectedVehicles.length === 0 || !done) {
        let newVehicle = {};
        newVehicle[action.planet] = action.data;
        selectedVehicles.push(newVehicle);
      }
      selectedVehicles.forEach(el => {
        Object.entries(el).forEach(([key, val]) => {
          selectedVehiclesList.push(val);
        });
      });
      return {
        ...state,
        selectedVehicles,
        selectedVehiclesList
      };
    case SELECTED_VEHICLES:
      let finalselectedVehicles = [...state.selectedVehicles];
      return {
        ...state,
        finalselectedVehicles
      };
    default:
      return { ...state };
  }
}
