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
  width: 70%;

  @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 100%;

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
      flex-wrap: wrap;
      height: 33%;
    }

    ul {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 50px;
      height: 100%;

      @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
        gap: 30px;
    }


      li {
        font-family: "Sigmar One", cursive;
        font-size: 25px;
        font-weight: bold;
        color: var(--grey);
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
       font-size: 18px;
    }

        :hover {
          color: var(--orange);
          border-bottom: 1px solid var(--orange);
        }
      }
    }
  }

}
  .dropdown {
    width: 10%;
    display: flex;
    justify-content: center;
    height: 100%;

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
