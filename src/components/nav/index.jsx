import Input from "../input";
import Dropdown from "react-bootstrap/dropdown";
import Styled from "./styles"

function Nav() {
  return (
    <Styled>
      <nav>
        <ul>
          <li>Banho</li>
          <li>Roupa</li>
          <li>Passeio</li>
          <li>Higiene</li>
        </ul>
      </nav>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle style={{backgroundColor: "var(--green)"}} variant="success" id="dropdown-basic">
            Classificar
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Por nome</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Por categoria</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Por preço</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="input">
        <Input placeholder="Filtrar produto por nome ou categoria" />
      </div>
    </Styled>
  );
}

export default Nav;
