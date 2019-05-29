import React, { Component } from "react";
import { SubmitButton } from "./styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { subscribe } from "redux-subscriber";
import { getFinal } from "../actions/submitAction";
import { fetchSelectedVehicle } from "../actions/vehiclesActions";
import { getTime } from "../actions/timeActions";
import { fetchSelectedPlanets } from "../actions/planetActions";

class Sumbit extends Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }
  componentWillMount() {
    this.props.fetchSelectedPlanets();
    this.props.fetchSelectedVehicle();
    this.props.getTime();
    subscribe("result.result", state => {
      this.props.finalResult(state.result.result, this.props.time);
    });
  }
  submitData() {
    this.props.getFinal(this.props.planets, this.props.vehicles);
  }
  render() {
    return <SubmitButton disabled={this.props.planets.length<4 || this.props.vehicles.length<4}  onClick={this.submitData}>Find Falcon!</SubmitButton>;
  }
}
Sumbit.propTypes = {
  getFinal: PropTypes.func.isRequired,
  getTime:PropTypes.func.isRequired,
  fetchSelectedPlanets: PropTypes.func.isRequired,
  fetchSelectedVehicle: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  result: state.result.result,
  time: state.time.time,
  planets: state.planets.selectedPlanet,
  vehicles: state.vehicles.selectedVehiclesList
});
export default connect(
  mapStateToProps,
  { getFinal, fetchSelectedVehicle, fetchSelectedPlanets,getTime }
)(Sumbit);
