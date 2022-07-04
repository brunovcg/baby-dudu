import { ProductProvider } from "./products";
import { ModalProvider } from "./modal";
import { WindowProvider } from "./window";
import { CardProvider } from "./card";
import { AuthProvider } from "./auth";

const Providers = ({ children }) => {
  return (
    <WindowProvider>
      <ModalProvider>
        <AuthProvider>
          <ProductProvider>
            <CardProvider>{children}</CardProvider>
          </ProductProvider>
        </AuthProvider>
      </ModalProvider>
    </WindowProvider>
  );
};

export default Providers;
