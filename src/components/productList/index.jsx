import Styled from "./styles";
import Card from "../card";
import { useContext } from "react";
import { ProductContext } from "../../providers/products";
import Button from "../button";
import { AuthContext } from "../../providers/auth";
import { ModalContext } from "../../providers/modal";
import ModalProductListButtons from "./templates/modal-product-list-buttons"
import ModalProductListContent from "./templates/modal-product-list-content"

function ProductList() {
  const { filtered } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal(
      <span style={{ fontFamily: "Chango, cursive", color: "var(--grey)" }}>
        Adicionar um produto
      </span>,
      <ModalProductListContent/>,
      <ModalProductListButtons />
    );
  };

  return (
    <Styled>
      {user?.token ? (
        <div className="add-button">
          {
            <Button onClick={handleClick} size="large">
              Adicionar
            </Button>
          }
        </div>
      ) : null}
      <div className="product-list-container">
        {filtered.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </Styled>
  );
}

export default ProductList;
