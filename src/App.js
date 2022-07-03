import Header from "./components/header";
import Board from "./components/board";
import Nav from "./components/nav";
import ProductList from "./components/productList";
import { useEffect, useContext } from "react";
import { ProductContext } from "./providers/products";
import { ModalContext } from "./providers/modal";
import Modal from "./components/modal";
import Address from "./components/address"

function App() {
  const { getProducts, categories, getCategories } = useContext(ProductContext);
  const { show } = useContext(ModalContext);

  useEffect(() => {
    getProducts();
  }, [getProducts, categories]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className="App">
      <Header />
      <Board />
      <Address/>
      <Nav />
      <ProductList />
      {show && <Modal />}
    </div>
  );
}

export default App;
