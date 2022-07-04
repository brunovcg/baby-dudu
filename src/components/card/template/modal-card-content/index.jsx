import { ModalContent} from "../../../../styles/modal-content.js";
import Input from "../../../input";
import { useContext } from "react";
import { CardContext } from "../../../../providers/card";

function Content() {
  const { person, setPerson, message, setMessage } = useContext(CardContext);

  return (
    <ModalContent>
      <h3>Obrigado! Escreva seu nome para relacionarmos ao presente:</h3>
      <article >
        <Input
          onChange={(evt) => setPerson({ data: evt.target.value, error: "" })}
          error={person.error}
          fieldType="input"
          placeholder="seu nome"
          showError
        />
        <Input
          onChange={(evt) => setMessage({ data: evt.target.value, error: "" })}
          error={message.error}
          fieldDype="textarea"
          placeholder="sua mensagem"
          showError
        />
      </article>
    </ModalContent>
  );
}

export default Content;
