import styled from "styled-components";
import logo from "../../assets/images/background.jpeg";

const Styled = styled.div`
  width: 99vw;
  height: 500px;
  background: url(${logo}) no-repeat;
  background-size: cover;

  .transparent {
    background: rgb(234, 234, 234, 0.1);
    height: 100%;
  }

  p {
    font-family: 'Luckiest Guy', cursive;
    font-size: 60px;
    color: var(--light-grey);
    -webkit-text-stroke: 3px var(--grey);
    width: 100%;
    height: 100%;
    padding: 40px;
  }
`;

export default Styled;
