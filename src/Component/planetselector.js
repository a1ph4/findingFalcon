import React, { Component } from "react";
import PropTypes from "prop-types";
import { PlanetOption } from "./styled-components";
import VehicleOption from "./vehicleoption";
import { connect } from "react-redux";
import { subscribe } from "redux-subscriber";
import { fetchPlanets, selectPlanets } from "../actions/planetActions";
import { fetchVehicles, selectVehicle } from "../actions/vehiclesActions";

class PlanetSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      selectedPlanet: [],
      selectedVehicle: "",
      showVehicles: false
    };
    this.selected = false;
    this.selectPlanet = this.selectPlanet.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
  }
  componentWillMount() {
    this.props.fetchPlanets();
    subscribe("planets.allplanets", state => {
      this.setState({ planets: state.planets.allplanets });
    });
    subscribe("planets.selectedPlanet", state => {
      let planets = this.state.planets.filter(planet => {
        return state.planets.selectedPlanet.indexOf(planet.name) === -1;
      });
      this.updateState(planets);
    });
  }
  selectPlanet(e) {
    if (e.target.value === "Select Planet") {
      this.setState({ selectedPlanet: {} });
      this.setState({ showVehicles: false });
      return false;
    }
    let current = e.target.value;
    let selectedPlanet = this.state.planets.filter(planet => {
      return planet.name === current;
    });
    this.setState({ selectedPlanet: selectedPlanet[0] });
    this.props.fetchVehicles();
    this.selected = true;
    this.setState({ showVehicles: true });
    this.props.selectPlanets(selectedPlanet[0].name);
  }
  selectVehicle(e) {
    let vehicle =
      e.target.value === "on" ? e.target.getAttribute("data-name") : null;
    this.setState({
      selectedVehicle:
        e.target.value === "on" ? e.target.getAttribute("data-name") : null
    });
    this.props.selectVehicle(vehicle);
  }
  updateState(planets) {
    if (!this.selected) {
      this.setState({ planets: planets });
    }
  }
  render() {
    let options;
    if (this.state.planets.length) {
      options = this.state.planets.map(planet => {
        return <option key={planet.name}> {planet.name}</option>;
      });
    }
    return (
      <div>
        <PlanetOption onChange={e => this.selectPlanet(e)}>
          <option key="Select Planet">Select Planet</option>
          {options}
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
PlanetSelector.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  selectPlanets: PropTypes.func.isRequired,
  selectVehicle: PropTypes.func.isRequired,
  fetchVehicles: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  vehicles: state.vehicles.allvehicles
});
export default connect(
  mapStateToProps,
  {
    fetchPlanets,
    fetchVehicles,
    selectPlanets,
    selectVehicle
  }
)(PlanetSelector);
