import styled from "styled-components";
import logo from "../../assets/images/background.jpeg";

const Styled = styled.article`
  width: 99vw;
  height: 500px;
  background: url(${logo}) no-repeat;
  background-size: cover;

  .transparent {
    background: rgb(234, 234, 234, 0.1);
    height: 100%;
  }


`;

export default Styled;
