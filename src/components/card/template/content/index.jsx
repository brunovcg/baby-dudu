import { ModalContent} from "../../styles";
import Input from "../../../input";
import { useContext } from "react";
import { CardContext } from "../../../../providers/card";

function Content() {
  const { person, setPerson, message, setMessage } = useContext(CardContext);

  return (
    <ModalContent>
      <h3>Obrigado! Escreva seu nome para relacionarmos ao presente:</h3>
      <div className="input-card">
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
      </div>
    </ModalContent>
  );
}

export default Content;
