import { createContext, useEffect, useState } from "react";
import { babyDuduServices as bdServices } from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ModalContext } from "../modal";
import { ProductContext } from "../products";

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const [person, setPerson] = useState({ data: "", error: "" });
  const [message, setMessage] = useState({ data: "", error: "" });
  const [editCard, setEditCard] = useState(false);
  const { modalReset, show } = useContext(ModalContext);
  const { products, setProducts } = useContext(ProductContext);

  const [name, setName] = useState({ data: "", error: "" });
  const [category, setCategory] = useState({ data: "", error: "" });
  const [link, setLink] = useState({ data: "", error: "" });
  const [img, setImg] = useState({ data: "", error: "" });
  const [price, setPrice] = useState({ data: 0, error: "" });

  const deleteCard = (product_id) => {
    bdServices()
      .products.delete(product_id)
      .then((res) => {
        const newProducts = [...products].filter(
          (item) => item.id !== product_id
        );
        setProducts(newProducts);
        modalReset();
        toast.success("Produto deletado");
      })
      .catch((err) => toast.error("Algo deu errado"));
  };

  const addCard = (payload) => {
    bdServices()
      .products.create(payload)
      .then((res) => {
        setProducts([...products, res.data]);
        modalReset();
        toast.success("Produto inserido!");
      })
      .catch((err) => toast.error("Algo deu errado"));
  };

  useEffect(() => {
    setPerson({ data: "", error: "" });
    setMessage({ data: "", error: "" });
    setName({ data: "", error: "" });
    setCategory({ data: "", error: "" });
    setLink({ data: "", error: "" });
    setImg({ data: "", error: "" });
    setPrice({ data: "", error: "" });
  }, [show]);

  return (
    <CardContext.Provider
      value={{
        person,
        setPerson,
        message,
        setMessage,
        editCard,
        setEditCard,
        deleteCard,
        addCard,
        name,
        link,
        img,
        price,
        category,
        setName,
        setLink,
        setImg,
        setCategory,
        setPrice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
