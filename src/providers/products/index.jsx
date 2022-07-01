import { createContext, useState} from "react";
import {database} from "../../db"
//import {api} from "../../services/api"

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])


  const handleProduct = (selectedId, person) => {
    let items = [...products]
    const index = items.findIndex(item => item.id = selectedId)
    const newStatus = !items[index].status
    items[index].status = newStatus
    items[index].person = newStatus ? person : ""
    setProducts(items)
  }


  const getProducts = () => {
    setProducts(database)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        handleProduct,
        getProducts

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
