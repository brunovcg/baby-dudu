import styled from "styled-components";
import { configs } from "../../configs";

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: 2px solid var(--grey);

  @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    flex-direction: column;
    height: 220px;
  }

  .box-ddl{

  display: flex;
  justify-content: center;
  width: 70%;

  @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }

 

}
  .dropdown {
    width: 50%;
    display: flex;
    justify-content: center;
    height: 100%;

    button{
      width: 300px;
    }

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
      align-items: center;
      height: 33%;
      width: 50%;

      button {
        height: 50px;
        width: 160px;
      }
    }
  }

  .input {
    width: 30%;
    display: flex;
    justify-content: center;

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
      height: 33%;
      width: 80%;
      align-items: center;
    }
  }
`;

export default Styled;
