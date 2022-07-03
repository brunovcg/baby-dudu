import { ProductProvider } from "./products";
import { ModalProvider } from "./modal";
import { WindowProvider } from "./window";
import { CardProvider } from "./card";

const Providers = ({ children }) => {
  return (
    <WindowProvider>
      <ProductProvider>
        <CardProvider>
          <ModalProvider>{children}</ModalProvider>
        </CardProvider>
      </ProductProvider>
    </WindowProvider>
  );
};

export default Providers;
