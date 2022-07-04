import Button from "../button";
import { useContext } from "react";
import { WindowContext } from "../../providers/window";
import { ModalContext } from "../../providers/modal";
import { AuthContext } from "../../providers/auth";
import ModalLoginContent from "./template/modal-login-content";
import ModalLoginButtons from "./template/modal-login-buttons";

function Footer() {
  const { isMobile } = useContext(WindowContext);
  const { openModal } = useContext(ModalContext);
  const { user, logoff } = useContext(AuthContext);

  const handleModal = () => {
    if (!user?.token) {
      openModal(
        <span style={{ fontFamily: "Chango, cursive", color: "var(--grey)" }}>
          Login
        </span>,
        <ModalLoginContent />,
        <ModalLoginButtons />
      );
    } else {
      logoff();
    }
  };

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
        <Button
          onClick={handleModal}
          size={isMobile() ? "medium" : "large"}
          backgroundColor={user?.token ? "var(--red)" : "var(--green)"}
        >
          {user?.token ? "Logoff" : "Admin"}
        </Button>
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
        <p style={{ margin: "0", textAlign: "end" }}>Desenvovido por:</p>
        <a href="mailto: brunovcg@gmail.com" target="_blank"  style={{ margin: "0", textAlign: "end", cursor: "pointer", color:"var(--green)" }} rel="noreferrer">brunovcg@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
