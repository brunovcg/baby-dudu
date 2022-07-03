import { createContext, useState, useEffect, useContext } from "react";
import {
  babyDuduServices as bdServices,
  getUserStorage,
} from "../../services/api";
import { toast } from "react-toastify";
import { ModalContext } from "../modal";

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const { modalReset } = useContext(ModalContext);
  const [username, setUsername] = useState({ data: "", error: "" });
  const [password, setPassword] = useState({ data: "", error: "" });
  const [user, setUser] = useState({});

  const login = (payload) => {
    bdServices()
      .user.login(payload)
      .then((res) => {
        sessionStorage.setItem("@baby-dudu:user", JSON.stringify(res.data));
        sessionStorage.setItem(
          "@baby-dudu:token",
          JSON.stringify(res.data.token)
        );
        toast.success("Bem vindo(a)!");
        setUser(res.data);
        modalReset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no usuário ou na senha");
      });
  };

  useEffect(() => {
    setUser(getUserStorage());
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
