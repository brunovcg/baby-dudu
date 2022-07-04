import { useContext } from "react";
import { ModalContent } from "../../../../styles/modal-content";
import Button from "../../../../components/button";
import { CardContext } from "../../../../providers/card";

function EditContent({ product }) {
  const { deleteCard } = useContext(CardContext);

  const handleDelete = () => {
    deleteCard(product.id);
  };

  return (
    <ModalContent>
      <article>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h3 style={{ color: "var(--yellow)" }}>Editar:</h3>
          <Button
            disabled
            onClick={() => console.log(true)}
            size="large"
            backgroundColor="var(--yellow)"
          >
            em breve
          </Button>
        </div>
      </article>

      <article>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h3 style={{ color: "var(--red)" }}>Deletar:</h3>
          <Button
            onClick={() => handleDelete()}
            size="large"
            backgroundColor="var(--red)"
          >
            Deletar
          </Button>
        </div>
      </article>
    </ModalContent>
  );
}

export default EditContent;
