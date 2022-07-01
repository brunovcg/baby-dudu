import Styled from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { toReal } from "../../utils";
import Button from "../button";

const ModalTemplate = () => {
  return <div>Teste</div>;
};

function Card({ product }) {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal("Marcar como comprado", <ModalTemplate />, [
      {
        text: "Confirmar",
        onClick: () => console.log("teste"),
        backgroundColor: "var(--green)",
        
      },
    ]);
  };

  return (
    <Styled>
      <figure>
        <img src={product.img} alt="foto" />
      </figure>
      <div className="info-box">
        <div className="prod-name">{product.name}</div>
      
        <div className="prod-price">{product.category} | {toReal(product.price)} </div>
        <a href={product.link} rel="noreferrer" target="_blank">
          Link de compra
        </a>
        <Button size="large" onClick={handleClick}>
          Marcar como comprado
        </Button>
      </div>
    </Styled>
  );
}

export default Card;
