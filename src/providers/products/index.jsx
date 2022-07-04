import { createContext, useState, useCallback, useEffect } from "react";
import { babyDuduServices as bdServices } from "../../services/api";
import { toast } from "react-toastify";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleProduct = (selectedId, person) => {
    let items = [...products];
    const index = items.findIndex((item) => (item.id = selectedId));
    const newStatus = !items[index].status;
    items[index].status = newStatus;
    items[index].person = newStatus ? person : "";
    setProducts(items);
  };

  const getProducts = useCallback(() => {
    bdServices()
      .products.getAll()
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const getCategories = useCallback(() => {
    bdServices()
      .categories.getAll()
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  const filterProducts = useCallback(
    (word) => {
      const filter = [...products].filter((item) =>
        item.name?.toUpperCase().includes(word?.toUpperCase())
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
    const filter = [...products].filter(
      (item) => item.category.name === category
    );
    setFiltered(filter);
  };

  const filterStatus = (status = false) => {
    let filter = [...products].filter((item) => item.status === status);
    setFiltered(filter);
  };

  const classifyProducts = (type, key) => {
    const newOrder = [...products].sort((a, b) => {
      if (key) {
        if (typeof key === "number") {
          return a[type][key] - b[type][key];
        }
        return a[type][key].localeCompare(b[type][key]);
      }

      if (typeof a[type] === "number") {
        return a[type] - b[type];
      }
      return a[type].localeCompare(b[type]);
    });

    setFiltered(newOrder);
  };

  const buyPresent = (id, payload) => {
    let newList = [...products];

    let index = newList.findIndex((item) => item.id === id);
    newList[index].status = true;

    bdServices()
      .products.update(id, payload)
      .then((res) => {
        setProducts(newList);
      })
      .catch((err) => toast.error("algo deu errado"));
  };

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        filtered,
        products,
        setProducts,
        handleProduct,
        getProducts,
        classifyProducts,
        filterProducts,
        filterCategory,
        filterStatus,
        buyPresent,
        getCategories,
        categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
