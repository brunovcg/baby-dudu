import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import {useContext} from "react"
import Button from "../button";
import {
  FaArrowRight,

} from "react-icons/fa";
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
        {modalButtons.map((item, index) => (
          <Button
            key={index}
            onClick={item.onClick}
            circle
            width="40px"
            height="40px"
            backgroundColor={item.backgroundColor}
          >{item.text}</Button>
        ))}
        {closeButton && <Button
          circle
          backgroundColor="var(--grey)"
          width="40px"
          height="40px"
          onClick={() => setShow(false)}
        >
          <FaArrowRight/>
        </Button>}
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
};

export default ModalCustom;