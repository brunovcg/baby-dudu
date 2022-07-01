import { useState } from "react";

function Button({ children, onClick, backgroundColor, size, disabled}) {
  const [hover, setHover] = useState(false);

  const hoverStyle = {
    border: `1px solid ${backgroundColor ?? "var(--orange)"}`,
    backgroundColor: "var(--white)",
    color: backgroundColor ?? "var(--orange)",
  };

  const buttonSize = () => {
    switch (size) {
      case "large":
        return "200px";
      case "medium":
        return "80px";
      case "small":
        return "40px";
      default:
        return "fit-content";
    }
  };

  return (
    <button
      disabled={disabled}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        border: hover ? hoverStyle.border : "none",
        borderRadius: "3px",
        width: buttonSize(),
        height: "50px",
        color: hover ? hoverStyle.color : "var(--white)",
        backgroundColor: disabled ? "var(--disabled)" : hover
          ? hoverStyle.backgroundColor
          : backgroundColor ?? "var(--orange)",
        padding: "5px",
        fontSize: "13px",
        cursor: disabled? "not-allowed": "pointer"
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
