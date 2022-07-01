import { createContext, useState, useCallback, useEffect } from "react";
import { database } from "../../db";
//import {api} from "../../services/api"

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const handleProduct = (selectedId, person) => {
    let items = [...products];
    const index = items.findIndex((item) => (item.id = selectedId));
    const newStatus = !items[index].status;
    items[index].status = newStatus;
    items[index].person = newStatus ? person : "";
    setProducts(items);
  };

  const getProducts = useCallback(() => {
    setProducts(database);
  }, []);

  const filterProducts = useCallback(
    (word) => {
      const filter = [...products].filter((item) =>
        item.name.toUpperCase().includes(word.toUpperCase())
      );
      setFiltered(filter);
    },
    [products]
  );

  const filterCategory = (category) => {
    setFiltered(products);
    if (category === "Todos") {
      return setFiltered(products);
    }
    const filter = [...products].filter((item) => item.category === category);
    setFiltered(filter);
  };

  const filterStatus = (status = false) => {
    let filter = [...filtered].filter((item) => item.status === status);
    setFiltered(filter);
  };

  const classifyProducts = (type) => {
    const newOrder = [...products].sort((a, b) => {
      if (typeof a[type] === "number") {
        return a[type] - b[type];
      }
      return a[type].localeCompare(b[type]);
    });

    setFiltered(newOrder);
  };

  const buyPresent = (id) => {

    let newList = [...products] 

    let index = newList.findIndex(item=> item.id  === id)

    newList[index].status = true

    setProducts(newList)

  }

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        filtered,
        products,
        handleProduct,
        getProducts,
        classifyProducts,
        filterProducts,
        filterCategory,
        filterStatus,
        buyPresent
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
