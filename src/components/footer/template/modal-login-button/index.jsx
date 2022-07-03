import Button from "../../../button";
import { useContext, useCallback } from "react";
import { AuthContext } from "../../../../providers/login";

function ModalLoginLButtons() {
  const { username, password, setPassword, setUsername, login } =
    useContext(AuthContext);

  const modalCheck = useCallback(() => {
    let error = false;
    if (!username.data) {
      setUsername({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    if (!password.data) {
      setPassword({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    return error;
  }, [username.data, password.data, setUsername, setPassword]);

  const handleClick = () => {
    const payload = {
      username: username.data,
      password: password.data,
    };

    let error = modalCheck();

    if (error) {
      return;
    }

    login(payload);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        backgroundColor="var(--green)"
        size="medium"
      >
        Logar
      </Button>
    </div>
  );
}

export default ModalLoginLButtons;
