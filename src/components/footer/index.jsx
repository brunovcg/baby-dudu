import Button from "../button";
import { useContext } from "react";
import { WindowContext } from "../../providers/window";
import { ModalContext } from "../../providers/modal";
import ModalLoginContent from "./template/modal-login-content";
import ModalLoginButtons from "./template/modal-login-buttons";


function Footer() {
  const { isMobile } = useContext(WindowContext);
  const {openModal} = useContext(ModalContext)

    const handleModal = () => {

      openModal("Login", < ModalLoginContent/>,<ModalLoginButtons/>,true)


    }






  return (
    <footer
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "var(--white)",
        display: "flex",
        justifyContent: "space-between",
        padding: "40px",
        alignItems: "center",
      }}
    >
      <div>
        <Button onClick={handleModal} backgroundColor="var(--red)">Administrar</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          fontFamily: "Chango, cursive",
          color: "var(--yellow)",
          fontSize: isMobile() ? "10px" : "16px",
        }}
      >
        <p
          style={{ margin: "0", textAlign: "end"}}
        >
          Desenvovido por:
        </p>
        <p
          style={{ margin: "0", textAlign: "end" }}
        >
          brunovcg@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
