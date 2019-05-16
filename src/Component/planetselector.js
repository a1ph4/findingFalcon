import React, { Component } from "react";
import { PlanetOption } from "./styled-components";
import VehicleOption from "./vehicleoption";
import axios from "axios";
class PlanetSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlanet: {
        name: "Select Planet"
      },
      vehicles: [],
      selectedVehicle: "",
      showVehicles: false
    };
    this.selectPlanet = this.selectPlanet.bind(this);
  }
  componentWillMount() {
    axios.get("https://findfalcone.herokuapp.com/vehicles").then(res => {
      this.setState({ vehicles: res.data });
    });
  }
  selectPlanet(e) {
    let current = e.target.value;
    let selectedPlanet = this.props.planets.filter(planet => {
      return planet.name === current;
    });
    this.setState({ selectedPlanet: selectedPlanet[0] });
    this.setState({ showVehicles: true });
  }
  selectVehicle(e) {
    console.log(e.target.value);
    this.setState({ selectVehicle: e.target.value });
  }
  render() {
    return (
      <div>
        <PlanetOption
          onChange={e => this.selectPlanet(e)}
          currentValue={this.state.selectedPlanet}
        >
          <option key="Select Planet">Select Planet</option>
          {this.props.planets.map(planet => {
            return <option key={planet.name}>{planet.name}</option>;
          })}
        </PlanetOption>
        {this.state.vehicles.map(vehicle => {
          return (
            <VehicleOption
              key={vehicle.name}
              vehicle={vehicle}
              planet={this.state.selectedPlanet}
              onVehicleChange={e => this.selectVehicle(e)}
              hidden={!this.state.showVehicles}
            />
          );
        })}
      </div>
    );
  }
}

export default PlanetSelector;
