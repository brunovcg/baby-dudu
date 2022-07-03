import { ModalStyled } from "../../styles";
import Input from "../../../input";
import { useContext } from "react";
import { CardContext } from "../../../../providers/card";

function Content() {
  const { person, setPerson, message, setMessage } = useContext(CardContext);

  return (
    <ModalStyled>
      <h3>Obrigado! Escreva seu nome para relacionarmos ao presente:</h3>
      <div className="input-card">
        <Input
          onChange={(evt) => setPerson({ data: evt.target.value, error: "" })}
          error={person.error}
          type="input"
          placeholder="seu nome"
        />
        <Input
          onChange={(evt) => setMessage({ data: evt.target.value, error: "" })}
          error={message.error}
          type="textarea"
          placeholder="sua mensagem"
        />
      </div>
    </ModalStyled>
  );
}

export default Content;
