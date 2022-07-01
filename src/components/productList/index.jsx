import Styled from "./styles"
import Card from "../card"
import {useContext} from "react"
import {ProductContext} from "../../providers/products"

function ProductList () {

  const {products} = useContext(ProductContext)


  return <Styled>

    {products.map((item=> <Card key={item.id} product={item}/>))}

  </Styled>
}

export default ProductList