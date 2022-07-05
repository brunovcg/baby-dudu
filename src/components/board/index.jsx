import Styled from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { ProductContext } from "../../providers/products";
import Messages from "./template/messages";
import { Carousel } from "react-bootstrap";

function Board() {
  const { products } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  return (
    <Styled>
      <Carousel
      fade
        className="transparent"
        style={{
          maxWidth: "99vw",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {user?.token &&
          products
            .filter((item) => item.message)
            .map((item) => (
              <Carousel.Item key={item.id}>
                <Messages product={item} />
              </Carousel.Item>
            ))}
      </Carousel>
    </Styled>
  );
}

export default Board;
