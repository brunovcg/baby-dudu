import {Dropdown} from "react-bootstrap";

const Ddl = ({ddlItems, label}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{
          backgroundColor: "var(--green)",
          fontFamily: "Chango, cursive",
        }}
        variant="success"
        id="dropdown-basic"
      >
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {ddlItems.map((item) => (
          <Dropdown.Item key={item.id} onClick={item.onClick}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Ddl;
