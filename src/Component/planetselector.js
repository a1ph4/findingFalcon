import React, { Component } from "react";
import PropTypes from "prop-types";
import { PlanetOption } from "./styled-components";
import VehicleOption from "./vehicleoption";
import { connect } from "react-redux";
import { subscribe } from "redux-subscriber";
import { fetchPlanets, selectPlanets } from "../actions/planetActions";
import { fetchVehicles, selectVehicle } from "../actions/vehiclesActions";
import { updateTime } from "../actions/timeActions";

class PlanetSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      vehicles: [],
      selectedPlanet: [],
      selectedVehicle: "",
      showVehicles: false,
      subscriptions:[]
    };
    this.selected = false;
    this.selectPlanet = this.selectPlanet.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
  }
  componentWillMount() {
    this.props.fetchPlanets();
    this.props.fetchVehicles();
    let allPlanetsSubs = subscribe("planets.allplanets", state => {
      this.setState({ planets: state.planets.allplanets });
    });
    let selectedPlanetSubs = subscribe("planets.selectedPlanet", state => {
      let planets = this.state.planets.filter(planet => {
        return state.planets.selectedPlanet.indexOf(planet.name) === -1;
      });
      if (!this.selected) {
        this.setState({ planets: planets });
      }
    });
    let allVehiclesSubs = subscribe("vehicles.allvehicles", state => {
      this.setState({ vehicles: state.vehicles.allvehicles });
    });
    let selectedVehicleSubs = subscribe("vehicles.selectedVehicles", state => {
      var vehiclecounts = {};
      state.vehicles.selectedVehiclesList.forEach(vehicle => {
        vehiclecounts[vehicle] = (vehiclecounts[vehicle] || 0) + 1;
      });
      let vehicles = this.state.vehicles.map(vehicle => {
        let newVehicle = {
          name: vehicle.name,
          speed: vehicle.speed,
          max_distance: vehicle.max_distance,
          total_no: vehicle.total_no - (vehiclecounts[vehicle.name] || 0)
        };
        return newVehicle;
      });
      if (!this.selected) {
        this.setState({ vehicles: vehicles });
      }
    });
    this.setState({subscriptions: [allPlanetsSubs, selectedPlanetSubs, allVehiclesSubs, selectedVehicleSubs]})
  }
  componentWillUnmount(){
    this.state.subscriptions.forEach(subs=>{
      subs();
    })
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
    this.selected = true;
    this.setState({ showVehicles: true });
    this.props.selectPlanets(selectedPlanet[0].name);
  }
  selectVehicle(e) {
    let vehicleName =
      e.target.value === "on" ? e.target.getAttribute("data-name") : null;
    let vehicle = this.state.vehicles.filter(vehicle => {
      return vehicle.name === vehicleName;
    });
    this.setState({ selectedVehicle: vehicle });
    let time = this.state.selectedPlanet.distance / vehicle[0].speed;
    this.props.updateTime(time);
    this.props.selectVehicle(this.state.selectedPlanet.name, vehicleName);
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
PlanetSelector.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  selectPlanets: PropTypes.func.isRequired,
  selectVehicle: PropTypes.func.isRequired,
  fetchVehicles: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired,
  updateTime: PropTypes.func.isRequired
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
    selectVehicle,
    updateTime
  }
)(PlanetSelector);
