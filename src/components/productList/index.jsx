import Styled from "./styles";
import Card from "../card";
import { useContext } from "react";
import { ProductContext } from "../../providers/products";

function ProductList() {
  const { filtered } = useContext(ProductContext);

  return (
    <Styled>
      <div className="product-list-container">
        {filtered.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </Styled>
  );
}

export default ProductList;
