import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import {useContext} from "react"
import Button from "../button";
import { ModalContext } from "../../providers/modal";

const ModalCustom = () => {
  const { show, setShow, modalTitle, modalContent, modalButtons, closeButton } = useContext(ModalContext);

  return ReactDOM.createPortal(
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
      <Modal.Footer>
        <div style={{width: '100%', display: 'flex', justifyContent: 'end', gap: "30px"}}>
        {modalButtons.map((item, index) => (
          <Button
            key={index}
            onClick={item.onClick}
            size={item.width}
            backgroundColor={item.backgroundColor}
          >{item.text}</Button>
        ))}
        {closeButton && <Button
          backgroundColor="var(--red)"
          size="medium"
          onClick={() => setShow(false)}
        >
          Voltar
        </Button>}
        </div>
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
};

export default ModalCustom;