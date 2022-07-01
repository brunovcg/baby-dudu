import Styled from "./styles"
import {useContext} from "react"
import {ModalContext} from "../../providers/modal"


function Card ({product}) {

  const {openModal} = useContext(ModalContext)


  const handleClick = () => {

  openModal("teste", "testando")
  } 


  return (<Styled>



    <figure>
      <img src={product.img} alt="foto" />
    </figure>

    <div>{product.name}</div>
    <div>{product.category}</div>
    <div>{product.price}</div>
    <a href={product.link} rel="noreferrer" target="_blank" >Link de compra</a>
    <button onClick={handleClick}>Marcar como comprado</button>


  </Styled>)
}

export default Card