import styled from "styled-components";

export const Styled = styled.article`
  background: var(--white);
  width: 290px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 12px 21px 5px rgba(0, 0, 0, 0.52);
  position: relative;

  figure {
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 25px 10px 0 10px;
    height: 150px;

    img {
      max-height: 150px;
      border-radius: 5px;
      opacity: ${(props) => (props.status ? "50%" : "100%")};
    }
  }

  .info-box {
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div,
    a {
      height: 20%;
      display: flex;
      justify-content: center;
    }

    .prod-name {
      font-family: "Chango", cursive;
      font-size: 20px;
      color: ${(props) => (props.status ? "var(--disabled)" : "var(--green)")};
      text-align: center;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 10px;
      display: block;
    }

    .prod-price {
      color: ${(props) => (props.status ? "var(--disabled)" : "var(--gray)")};
    }

    a {
      color: ${(props) => (props.status ? "var(--disabled)" : "var(--yellow)")};
      font-weight: bold;
      pointer-events: ${(props) => (props.status ? "none" : "auto")};
    }

    .button-box {
      display: "flex";
      justify-content: "center";
    }
  }
`;
