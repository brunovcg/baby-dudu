import { ProductProvider } from "./products";
import { ModalProvider } from "./modal";
import { WindowProvider } from "./window";

const Providers = ({ children }) => {
  return (
    <WindowProvider>
      <ProductProvider>
        <ModalProvider>{children}</ModalProvider>
      </ProductProvider>
    </WindowProvider>
  );
};

export default Providers;
