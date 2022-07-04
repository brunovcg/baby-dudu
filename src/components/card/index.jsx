import { Styled } from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { AuthContext } from "../../providers/auth";
import { toReal } from "../../utils";
import Button from "../button";
import Title from "./template/modal-card-title";
import Content from "./template/modal-card-content";
import EditCard from "./template/edit-card";
import EditModalContent from "./template/modal-edit-card-content";
import ModalCardButtons from "./template/modal-card-buttons";

function Card({ product }) {
  const { openModal } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    openModal(<Title />, <Content />, <ModalCardButtons productId={product.id} />);
  };

  const handleEdit = () => {
    openModal(
      <span style={{ fontFamily: "Chango, cursive", color: "var(--grey)" }}>
        Alterar ou deletar?
      </span>,
      <EditModalContent product={product} />,
      <></>
    );
  };

  return (
    <Styled status={product.status}>
      {user?.token ? <EditCard onClick={handleEdit} /> : null}
      <figure>
        <img src={product.img} alt="foto" />
      </figure>
      <div className="info-box">
        <div className="prod-name">{product.name}</div>

        <div className="prod-price">
          {product.category.name} | {toReal(product.price)}
        </div>
        <a href={product.link} rel="noreferrer" target="_blank">
          Link de compra
        </a>
        <div className="button-box">
          <Button size="large" onClick={handleClick} disabled={product.status}>
            {product.status ? "Comprado" : "Marcar como comprado"}
          </Button>
        </div>
      </div>
    </Styled>
  );
}

export default Card;
