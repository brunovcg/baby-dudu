import Input from "../../../input";
import { useContext } from "react";
import { CardContext } from "../../../../providers/card";
import { ModalContent } from "../../../../styles/modal-content";

function ModalProductListContent() {
  const { name, link, img, price, category , setName, setLink, setImg, setCategory, setPrice} = useContext(CardContext);

  return (
    <ModalContent>
      <article>
        <Input
          error={name.error}
          onChange={(evt) => setName({ data: evt.target.value, error: "" })}
          placeholder="Digite o nome"
          fieldType="input"
          showError
          label="Nome"
        />
        <Input
          label="Categoria"
          onChange={(evt) => setCategory({ data: evt.target.value, error: "" })}
          error={category.error}
          placeholder="Digite a categoria"
          fieldType="input"
          showError
          type="text"
        />
        <Input
          label="Site"
          onChange={(evt) => setLink({ data: evt.target.value, error: "" })}
          error={link.error}
          placeholder="Digite o site do produto"
          fieldType="input"
          showError
          type="url"
        />
        <Input
          label="Imagem"
          onChange={(evt) => setImg({ data: evt.target.value, error: "" })}
          error={img.error}
          placeholder="Digite o endereço da imagem"
          fieldType="input"
          showError
          type="text"
        />
        <Input
          label="Preço"
          onChange={(evt) => setPrice({ data: evt.target.value, error: "" })}
          error={price.error}
          placeholder="Digite o preço"
          fieldType="input"
          showError
          type="number"
        />
      </article>
    </ModalContent>
  );
}

export default ModalProductListContent;
