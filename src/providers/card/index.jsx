import { createContext, useState } from "react";

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const [person, setPerson] = useState({ data: "", error: "" });
  const [message, setMessage] = useState({ data: "", error: "" });

  return (
    <CardContext.Provider
      value={{
        person,
        setPerson,
        message,
        setMessage,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
