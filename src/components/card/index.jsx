import { Styled, ModalStyled } from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { ProductContext } from "../../providers/products";
import { toReal } from "../../utils";
import Button from "../button";
import Input from "../input";

const ModalTemplate = () => {
  return (
    <ModalStyled>
      <h3>Obrigado! Escreva seu nome para relacionarmos ao presente:</h3>
      <div className="input-card">
        <Input type="input" placeholder="seu nome" />
        <Input type="textarea" placeholder="sua mensagem" />
      </div>
    </ModalStyled>
  );
};

function Card({ product }) {
  const { openModal, modalReset } = useContext(ModalContext);
  const { buyPresent } = useContext(ProductContext);

  const handleClick = () => {
    openModal(
      <h1
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Chango, cursive",
          color: "var(--grey)",
        }}
      >
        Marcar como comprado
      </h1>,
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
