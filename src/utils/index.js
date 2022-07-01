export const toReal = (number) => {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

export const isMobile = (width, breakpoint) => {
  return width > breakpoint;
};
