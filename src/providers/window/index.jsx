import { createContext, useState, useEffect } from "react";

export const WindowContext = createContext([]);

export const WindowProvider = ({ children }) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  const { width, height } = useWindowDimensions();

  return (
    <WindowContext.Provider value={{ width, height }}>
      {children}
    </WindowContext.Provider>
  );
};
