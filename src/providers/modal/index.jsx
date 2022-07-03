import { createContext, useState, useCallback } from "react";

export const ModalContext = createContext([]);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalButtons, setModalButtons] = useState([]);
  const [closeButton, setCloseButton] = useState(true);
  const [injectButtons, setInjectButtons] = useState(false);

  const modalReset = useCallback(() => {
    setShow(false);
    setModalTitle("");
    setModalContent("");
    setModalButtons([]);
    setCloseButton(true);
    setInjectButtons(false);
  }, []);

  const openModal = (
    title,
    content,
    buttons,
    injectButtons = false,
    closeButton = true
  ) => {
    setShow(true);
    setModalTitle(title);
    setModalContent(content);
    setModalButtons(buttons);
    if (injectButtons) {
      setInjectButtons(true);
    }
    if (!closeButton) {
      setCloseButton(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        modalReset,
        modalTitle,
        modalContent,
        modalButtons,
        openModal,
        closeButton,
        setModalButtons,
        setModalContent,
        injectButtons,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
