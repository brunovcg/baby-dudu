import styled from "styled-components";
import { configs } from "../../configs";

const Styled = styled.main`
  background: var(--green);
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  padding: 30px;

  .product-list-container {
    display: flex;
    width: 100%;
    max-width: 1350px;

    gap: 60px;
    flex-wrap: wrap;

    

    @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    flex-direction: column;
    align-items: center;
  }
  
  }

  @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    justify-content: center;
  }
`;

export default Styled;
