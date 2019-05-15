import styled from "styled-components";
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
export { Header, HeaderLinks };
