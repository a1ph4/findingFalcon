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
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
                    <PlanetSelector />
                  </PlanetWrapper>
                );
              })}
            </FlexWrapper>
          </Container>
          <Container>
            <TotalTime total={0} />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
