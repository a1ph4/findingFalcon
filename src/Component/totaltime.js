import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTime } from "../actions/timeActions";
import { connect } from "react-redux";
import { TimeContainer } from "./styled-components";

class TotalTime extends Component {
  componentWillMount() {
    this.props.getTime();
  }
  render() {
    return <TimeContainer>Total Time: {this.props.time}</TimeContainer>;
  }
}
TotalTime.propTypes = {
  getTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  time: state.time.time
});
export default connect(
  mapStateToProps,
  { getTime }
)(TotalTime);
