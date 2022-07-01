import Header from './components/header'
import Board from './components/board'
import Nav from './components/nav'
import ProductList from './components/productList';
import {useEffect, useContext} from "react"
import {ProductContext} from "./providers/products"
import {ModalContext} from "./providers/modal"
import Modal from "./components/modal"

function App() {

  const {getProducts} = useContext(ProductContext)
  const {show} = useContext(ModalContext)

  useEffect(()=>{
    getProducts()

  },[getProducts])

  return (
    <div className="App">
      <Header/>
      <Board/>
      <Nav/>
      <ProductList/>
      {show && <Modal/>}
   
    </div>
  );
}

export default App;
