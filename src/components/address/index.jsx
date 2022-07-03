import { useContext } from "react";
import { WindowContext } from "../../providers/window";

function Address() {
  const { isMobile } = useContext(WindowContext);
  return (
    <address
      style={{
        backgroundColor: "var(--yellow)",
        width: "100%",
        height: isMobile() ? "100px" : "50px",
        borderTop: "2px solid var(--grey)",
        fontFamily: "Chango, cursive",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        margin: "0",
        padding: "20px",
        textAlign: "justify",
      }}
    >
      Os presentes podem ser enviado para: Rua Japecanga, n. 54 - Prado, Recife
      - PE. CEP: 50720-130, edf. Albino Vieira Apt1501
    </address>
  );
}

export default Address;
