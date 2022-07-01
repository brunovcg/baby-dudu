import {ProductProvider} from "./products"
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ProductProvider>
  );
};

export default Providers;
