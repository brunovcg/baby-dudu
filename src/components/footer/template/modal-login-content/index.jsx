import Input from "../../../input";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/login";

function ModalLoginContent() {
  const { username, password, setUsername, setPassword } =
    useContext(AuthContext);

  return (
    <div style={{height: '400px'}}>
      <Input
        error={username.error}
        onChange={(evt) => setUsername({ data: evt.target.value, error: "" })}
        placeholder="Digite seu login"
        fieldType="input"
        showError
      />
      <Input
        onChange={(evt) => setPassword({ data: evt.target.value, error: "" })}
        error={password.error}
        placeholder="Digite sua senha"
        fieldType="input"
        showError
      />
    </div>
  );
}

export default ModalLoginContent;
