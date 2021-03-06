import { FaBabyCarriage } from "react-icons/fa";
import { useContext } from "react";
import { WindowContext } from "../../providers/window";

function Header() {

  const { isMobile } = useContext(WindowContext);

  return (
    <header
      style={{
        width: "100%",
        height: "20vh",
        borderBottom: "2px solid var(--grey)",
        boxShadow: " -1px 5px 5px 0px rgba(0,0,0,0.13)",
      }}
    >
      <div
        style={{
          background: "var(--light-grey)",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          gap: "30px",
        }}
      >
        <h1
          style={{
            color: "var(--orange)",
            fontWeight: "bold",
            marginBottom: "0",
            fontSize: "50px",
          }}
        >
          Dudu
        </h1>
        <h1
          style={{
            color: "var(--green)",
            fontWeight: "bold",
            marginBottom: "0",
            display: "flex",
          }}
        >
          <FaBabyCarriage />

          <span style={{ marginLeft: "5px" }}>Baby</span>
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "var(--white)",
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: isMobile() ? "14px" :"30px",
            margin: "0",
            fontFamily: "'Chango', cursive",
            color: "var(--yellow)",
            padding: "0 20px"
          }}
        >
          Lista para presentear Eduardinho...
        </p>
      </div>
    </header>
  );
}

export default Header;
