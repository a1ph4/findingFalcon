import React, { Component } from "react";
import {
  Header,
  HeaderLinks,
  FlexWrapper,
  PlanetWrapper,
  Container
} from "./Component/styled-components";
import PlanetSelector from "./Component/planetselector";
import TotalTime from "./Component/totaltime";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      time: 0
    };
  }
  componentWillMount() {
    axios.get("https://findfalcone.herokuapp.com/planets").then(res => {
      this.setState({ planets: res.data });
    });
  }
  render() {
    return (
      <div>
        <Header>
          <h3>Finding Falcon</h3>
          <HeaderLinks>
            <a href="/">Home</a>
          </HeaderLinks>
        </Header>
        <Container height="300px">
          <FlexWrapper>
            {[1, 2, 3, 4].map(i => {
              return (
                <PlanetWrapper key={i}>
                  <PlanetSelector planets={this.state.planets} />
                </PlanetWrapper>
              );
            })}
          </FlexWrapper>
        </Container>
        <Container>
          <TotalTime total={this.state.time} />
        </Container>
      </div>
    );
  }
}

export default App;
