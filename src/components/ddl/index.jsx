import { Dropdown } from "react-bootstrap";

const Ddl = ({ backgroundColor = "var(--green)", ddlItems, label }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{
          backgroundColor: backgroundColor,
          fontFamily: "Chango, cursive",
        }}
        variant="success"
        id="dropdown-basic"
      >
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {ddlItems.map((item) => (
          <Dropdown.Item
            key={item.id}
            onClick={item.onClick}
            style={{ fontFamily: "Chango, cursive", color: "var(--grey)" }}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Ddl;
