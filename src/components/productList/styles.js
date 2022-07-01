import styled from "styled-components"
import { configs } from "../../configs";

const Styled = styled.main`
background: var(--light-grey);
width: 100%;
min-height: 400px;
display: flex;

flex-wrap: wrap;
gap: 30px;
padding: 30px;

@media (max-width: ${`${configs.mobileBreakpoint}px`}) {
  justify-content: center;
  }

`

export default Styled