import React, { Component } from "react";
import { Container, ResultText, FlexWrapper, FlexCenter } from "./styled-components";

class Result extends Component {  
  render() {
    let text, planet;
    if(this.props.result.status === 'false'){
      text = `You were not able to find Falcone`;
    }else{
      text=`Success! Congratulations on Finding Falcone. King Shan is mighty pleased`
      planet = <ResultText>Planet: {this.props.result.planet_name}</ResultText>
    }
    return (
      <Container>
        <FlexWrapper>
          <FlexCenter>
            <ResultText>{text}</ResultText>
            {planet}
            <ResultText>Time Taken: {this.props.time}</ResultText>
          </FlexCenter>
        </FlexWrapper>
      </Container>
    );
  }
}
export default Result;
