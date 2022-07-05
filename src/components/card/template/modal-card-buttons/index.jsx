import Button from "../../../button";
import { useContext, useCallback } from "react";
import { ModalContext } from "../../../../providers/modal";
import { ProductContext } from "../../../../providers/products";
import { CardContext } from "../../../../providers/card";

function ModalCardButtons({ productId }) {
  const { modalReset } = useContext(ModalContext);
  const { buyPresent } = useContext(ProductContext);
  const { message, setMessage, person, setPerson } = useContext(CardContext);

  const modalCheck = useCallback(() => {
    let error = false;
    if (!message.data) {
      setMessage({
        data: "",
        error: "Seria legal deixar uma mensagem para dudu",
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

  const handleClick = useCallback(() => {
    const payload = {
      status: true,
      message: message.data,
      person: person.data,
    };
    let error = modalCheck();

    if (error) {
      return;
    }

    buyPresent(productId, payload);

    modalReset();
  }, [
    buyPresent,
    message.data,
    modalCheck,
    modalReset,
    person.data,
    productId,
  ]);

  return (
    <div>
      <Button
        onClick={handleClick}
        backgroundColor="var(--green)"
        size="large"
      >
        Confirmar
      </Button>
    </div>
  );
}

export default ModalCardButtons;
