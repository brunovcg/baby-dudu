import Input from "../../../input";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/auth";
import { ModalContent } from "../../../../styles/modal-content";

function ModalLoginContent() {
  const { username, password, setUsername, setPassword } =
    useContext(AuthContext);

  return (
    <ModalContent>
      <article>
        <Input
          error={username.error}
          onChange={(evt) => setUsername({ data: evt.target.value, error: "" })}
          placeholder="Digite seu login"
          fieldType="input"
          showError
          label="Usuário"
        />
        <Input
         label="Senha"
          onChange={(evt) => setPassword({ data: evt.target.value, error: "" })}
          error={password.error}
          placeholder="Digite sua senha"
          fieldType="input"
          showError
          type="password"
        />
      </article>
    </ModalContent>
  );
}

export default ModalLoginContent;
