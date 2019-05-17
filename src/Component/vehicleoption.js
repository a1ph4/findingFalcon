import React from "react";
import { VehicleContainer, RadioBtn } from "./styled-components";

const VehicleOption = props => {
  return (
    <VehicleContainer hidden={props.hidden ? "hidden" : ""}>
      <RadioBtn
        inputType="radio"
        name={props.planet.name}
        onChange={e => props.onVehicleChange(e)}
        disabled={props.planet.distance > props.vehicle.max_distance}
        data-name={props.vehicle.name}
      />
      <label>
        {props.vehicle.name} ({props.vehicle.total_no})
      </label>
    </VehicleContainer>
  );
};
export default VehicleOption;
