export const toReal = (number) => {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};


export const getEnumArray = (array, searchKey, seachValue, resultKey) => {
  return array.filter((item) => item[searchKey] === seachValue)[resultKey];
};
