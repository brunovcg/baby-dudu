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

  nav {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
      flex-wrap: wrap;
      height: 33%;
    }

    ul {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 70px;
      height: 100%;

      @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
        gap: 30px;
    }


      li {
        font-family: "Sigmar One", cursive;
        font-size: 30px;
        font-weight: bold;
        color: var(--grey);
        height: 100%;
        display: flex;
        align-items: center;

        @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
       font-size: 20px;
    }

        :hover {
          color: var(--orange);
          border-bottom: 1px solid var(--orange);
        }
      }
    }
  }
  .dropdown {
    width: 20%;
    display: flex;
    justify-content: center;

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
      align-items: center;
      height: 33%;

      button {
        height: 40px;
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
