import styled from "styled-components";
import { configs } from "../configs";



export const ModalContent = styled.div`
height: 450px;
h3 {
  color: var(--orange);
  font-family: "Chango", cursive;
  text-align: center;

  @media (max-width: ${`${configs.mobileBreakpoint}px`}) {
    font-size: 18px;
  }
}

article {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 200px;
  gap: 10px;
}
`;
