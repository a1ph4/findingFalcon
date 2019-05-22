import React, { Component } from "react";
import { SubmitButton } from "./styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { subscribe } from "redux-subscriber";
import { getFinal } from "../actions/submitAction";
import { fetchSelectedVehicle } from "../actions/vehiclesActions";
import { fetchSelectedPlanets } from "../actions/planetActions";

class Sumbit extends Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }
  componentWillMount() {
    this.props.fetchSelectedPlanets();
    this.props.fetchSelectedVehicle();
    subscribe("result.result", state => {
      this.props.finalResult(state.result.result);
    });
  }
  submitData() {
    this.props.getFinal();
    console.log(this.props.vehicles, this.props.planets);
  }
  render() {
    return <SubmitButton onClick={this.submitData}>Find Falcon!</SubmitButton>;
  }
}
Sumbit.propTypes = {
  getFinal: PropTypes.func.isRequired,
  fetchSelectedPlanets: PropTypes.func.isRequired,
  fetchSelectedVehicle: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  result: state.result.result,
  planets: state.planets.selectedPlanet,
  vehicles: state.vehicles.selectedVehiclesList
});
export default connect(
  mapStateToProps,
  { getFinal, fetchSelectedVehicle, fetchSelectedPlanets }
)(Sumbit);
