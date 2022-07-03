import Input from "../input";
import Styled from "./styles";
import { useContext, useState, useEffect, useCallback } from "react";
import { ProductContext } from "../../providers/products";
import Ddl from "../ddl";

function Nav() {
  const [inputValue, setInputValue] = useState("");
  const {
    classifyProducts,
    filterProducts,
    filterCategory,
    filterStatus,
    categories,
  } = useContext(ProductContext);

  const [navItems, setNavItems] = useState();

  const handleFilter = useCallback( (word, type = "category") => {
    if (type === "category") {
      filterCategory(word);
    } else if (type === "status") {
      filterStatus(word);
    }
    setInputValue("");
  },[filterCategory, filterStatus]);

  const getNavItems = useCallback(() => {
    let base = [
      {
        id: "nav-item-todos",
        name: "Todos",
        onClick: () => handleFilter("Todos"),
      },
      {
        id: "nav-item-nao-comprado",
        name: "Não comprados",
        onClick: () => handleFilter(false, "status"),
      },
    ];

    let newCategories = [...categories].map((item) => ({
      id: `nav-item-${item.id}`,
      name: item.name,
      onClick: () => handleFilter(`${item.name}`),
    }));

    return [...base, ...newCategories];
  }, [categories, handleFilter]);

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

  useEffect(() => {
    setNavItems(getNavItems);
  }, [categories, getNavItems]);

  return (
    <Styled>
      <div className="box-ddl">
        <Ddl className="dropdown" ddlItems={navItems || []} label="Filtrar" />

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
