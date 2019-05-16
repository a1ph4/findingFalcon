import styled, { css } from "styled-components";
const Header = styled.div`
  background-color: #222;
  height: 70px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  align-content: space-between;
  > h3 {
    flex-grow: 1;
  }
  @media (max-width: 420px) {
    padding: 0 15px;
  }
`;
const HeaderLinks = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
  > a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;
const Container = styled.div`
  width: 992px;
  padding: 15px;
  margin: 40px auto 0;
  min-height: ${props => props.height || "0"};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
`;

const PlanetWrapper = styled.div`
  width: calc(25% - 10px);
  padding: 10px;
`;
const PlanetOption = styled.select.attrs(({ currentValue }) => ({
  value: currentValue
}))`
  width: 100%;
  height: 40px;
  background: transparent;
  font-size: 18px;
`;
const TimeContainer = styled.div`
  font-size: 20px;
  text-align: center;
`;
const VehicleContainer = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
  text-align: left;
  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          display: block;
        `};
`;
const RadioBtn = styled.input.attrs(({ inputType }) => ({
  type: inputType
}))`
  height: 15px;
  width: 15px;
  vertical-align: baseline;
  &:disabled + label {
    color: #ccc;
  }
`;
export {
  Header,
  HeaderLinks,
  FlexWrapper,
  PlanetWrapper,
  Container,
  PlanetOption,
  TimeContainer,
  VehicleContainer,
  RadioBtn
};
