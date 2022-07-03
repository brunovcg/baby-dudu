import { Styled } from "./styles";
import { useContext, useEffect, useCallback } from "react";
import { ModalContext } from "../../providers/modal";
import { ProductContext } from "../../providers/products";
import { CardContext } from "../../providers/card";
import { toReal } from "../../utils";
import Button from "../button";
import Title from "./template/title";
import Content from "./template/content";

function Card({ product }) {
  const { openModal, modalReset, setModalButtons } = useContext(ModalContext);
  const { buyPresent } = useContext(ProductContext);
  const { message, setMessage, person, setPerson } = useContext(CardContext);

  const modalCheck = useCallback(() => {
    let error = false;
    if (!message.data) {
      setMessage({
        data: "",
        error: "Seria legal por seu nome",
      });
      error = true;
    }
    if (!person.data) {
      setPerson({
        data: "",
        error: "Seria legal por seu nome",
      });
      error = true;
    }
    return error;
  }, [message.data, person.data, setMessage, setPerson]);

  const confirmClick = useCallback(() => {
    const payload = {
      status: true,
      message: message.data,
      person: person.data,
    };
    let error = modalCheck();

    if (error) {
      return;
    }

    buyPresent(product.id, payload);

    modalReset();
  }, [
    buyPresent,
    message.data,
    modalCheck,
    modalReset,
    person.data,
    product.id,
  ]);

  const handleClick = () => {
    openModal(
      <Title />,

      <Content />,
      [
        {
          text: "Confirmar",
          onClick: () => confirmClick(),
          backgroundColor: "var(--green)",
        },
      ]
    );
  };

  useEffect(() => {
    setModalButtons([
      {
        text: "Confirmar",
        onClick: () => confirmClick(),
        backgroundColor: "var(--green)",
      },
    ]);
  }, [confirmClick, message, modalCheck, person, setModalButtons]);

  return (
    <Styled status={product.status}>
      <figure>
        <img src={product.img} alt="foto" />
      </figure>
      <div className="info-box">
        <div className="prod-name">{product.name}</div>

        <div className="prod-price">
          {product.category.name} |{toReal(product.price)}
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
