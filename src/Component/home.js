import React, { Component } from "react";
import { FlexWrapper, PlanetWrapper, Container } from "./styled-components";
import PlanetSelector from "./planetselector";
import TotalTime from "./totaltime";
import SubmitContainer from "./submit";
class Home extends Component {
  render() {
    return (
      <div>
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
        <SubmitContainer finalResult={this.props.finalResult} />
        <Container>
          <TotalTime total={0} />
        </Container>
      </div>
    );
  }
}

export default Home;
