import React, { Component } from "react";
import { PlanetOption } from "./styled-components";
import VehicleOption from "./vehicleoption";
import { connect } from "react-redux";
import { fetchPlanets } from "../actions/planetActions";
import { fetchVehicles } from "../actions/vehiclesActions";

class PlanetSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlanet: {},
      selectedVehicle: "",
      showVehicles: false
    };
    this.selectPlanet = this.selectPlanet.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
  }
  componentWillMount() {
    this.props.fetchPlanets();
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
    this.setState({
      selectedVehicle:
        e.target.value === "on" ? e.target.getAttribute("data-name") : null
    });
  }
  render() {
    return (
      <div>
        <PlanetOption onChange={e => this.selectPlanet(e)}>
          <option key="Select Planet">Select Planet</option>
          {this.props.planets.map(planet => {
            return <option key={planet.name}>{planet.name}</option>;
          })}
        </PlanetOption>
        {this.props.vehicles.map(vehicle => {
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
const mapStateToProps = state => ({
  planets: state.planets.allplanets,
  vehicles: state.vehicles.allvehicles
});
export default connect(
  mapStateToProps,
  { fetchPlanets, fetchVehicles }
)(PlanetSelector);
