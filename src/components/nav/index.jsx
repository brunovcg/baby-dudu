import Input from "../input";
import Styled from "./styles";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../providers/products";
import { WindowContext } from "../../providers/window";
import Ddl from "../ddl";
import { configs } from "../../configs";
import { isMobile } from "../../utils";

function Nav() {
  const [inputValue, setInputValue] = useState("");
  const { classifyProducts, filterProducts, filterCategory } =
    useContext(ProductContext);
  const { width } = useContext(WindowContext);
  
  const handleCategory = (word) => {
    filterCategory(word);
    setInputValue("");
  };

  const navItems = [
    {
      id: 1,
      name: "Banho",
      onClick: () => handleCategory("Banho"),
    },
    {
      id: 2,
      name: "Roupas",
      onClick: () => handleCategory("Roupas"),
    },
    {
      id: 3,
      name: "Passeio",
      onClick: () => handleCategory("Passeio"),
    },
    {
      id: 4,
      name: "Outros",
      onClick: () => handleCategory("Outros"),
    },
    {
      id: 5,
      name: "Todos",
      onClick: () => handleCategory("Todos"),
    },
  ];

  const ddlItems = [
    {
      id: 1,
      name: "Por nome",
      onClick: () => classifyProducts("name"),
    },
    {
      id: 2,
      name: "Por categoria",
      onClick: () => classifyProducts("category"),
    },
    {
      id: 3,
      name: "Por preço",
      onClick: () => classifyProducts("price"),
    },
  ];

  useEffect(() => {
    filterProducts(inputValue);
  }, [filterProducts, inputValue]);

  return (
    <Styled>
      <div className="box-ddl">
        {isMobile(width, configs.mobileBreakpoint) ? (
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </nav>
        ) : (
          <Ddl ddlItems={navItems} label="Filtrar" />
        )}
        <div className="dropdown">
          <Ddl ddlItems={ddlItems} label="Classificar" />
        </div>
      </div>

      <div className="input">
        <Input
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
          placeholder="Filtrar por nome ou categoria"
        />
      </div>
    </Styled>
  );
}

export default Nav;
