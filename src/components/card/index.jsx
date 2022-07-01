import Styled from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { ProductContext } from "../../providers/products";
import { toReal } from "../../utils";
import Button from "../button";
import Input from "../input";

const ModalTemplate = () => {
  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "30px",
      }}
    >
      <h3
        style={{
          color: "var(--orange)",
          fontSize: "18px",
          margin: "30px",
          fontFamily: "Chango, cursive",
        }}
      >
        Obrigado! Escreva seu nome para relacionarmos ao presente:
      </h3>
      <Input type="input" placeholder="seu nome" />
      <Input type="textarea" placeholder="sua mensagem" />
    </div>
  );
};

function Card({ product }) {
  const { openModal, modalReset } = useContext(ModalContext);
  const { buyPresent } = useContext(ProductContext);

  const handleClick = () => {
    openModal(
      <span
        style={{
          marginLeft: "30px",
          fontFamily: "Chango, cursive",
          color: "var(--grey)",
        }}
      >
        Marcar como comprado
      </span>,
      <ModalTemplate />,
      [
        {
          text: "Confirmar",
          onClick: () => {
            buyPresent(product.id);
            modalReset();
          },
          backgroundColor: "var(--green)",
        },
      ]
    );
  };

  return (
    <Styled status={product.status}>
      <figure>
        <img src={product.img} alt="foto" />
      </figure>
      <div className="info-box">
        <div className="prod-name">{product.name}</div>

        <div className="prod-price">
          {product.category} | {toReal(product.price)}{" "}
        </div>
        <a href={product.link} rel="noreferrer" target="_blank">
          Link de compra
        </a>
        <Button size="large" onClick={handleClick} disabled={product.status}>
          {product.status ? "Comprado" : "Marcar como comprado"}
        </Button>
      </div>
    </Styled>
  );
}

export default Card;
