import Input from "../input";
import Styled from "./styles";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../providers/products";
import Ddl from "../ddl";

function Nav() {
  const [inputValue, setInputValue] = useState("");
  const { classifyProducts, filterProducts, filterCategory, filterStatus } =
    useContext(ProductContext);

  const handleFilter = (word, type = "category") => {
    if (type === "category") {
      filterCategory(word);
    } else if (type === "status") {
      filterStatus(word);
    }
    setInputValue("");
  };

  const navItems = [
    {
      id: 1,
      name: "Todos",
      onClick: () => handleFilter("Todos"),
    },
    {
      id: 2,
      name: "Banho",
      onClick: () => handleFilter("Banho"),
    },
    {
      id: 3,
      name: "Roupas",
      onClick: () => handleFilter("Roupas"),
    },
    {
      id: 4,
      name: "Passeio",
      onClick: () => handleFilter("Passeio"),
    },
    {
      id: 5,
      name: "Outros",
      onClick: () => handleFilter("Outros"),
    },
    {
      id: 6,
      name: "Não comprados",
      onClick: () => handleFilter(false,"status"),
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
        <Ddl className="dropdown" ddlItems={navItems} label="Filtrar" />

        <Ddl className="dropdown" ddlItems={ddlItems} label="Classificar" />
      </div>

      <div className="input">
        <Input
          value={inputValue}
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
          placeholder="Filtrar por nome"
        />
      </div>
    </Styled>
  );
}

export default Nav;
