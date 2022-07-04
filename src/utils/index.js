export const toReal = (number) => {
  return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

export const getEnumArray = (array, searchKey, seachValue, resultKey) => {
  return array.filter((item) => item[searchKey] === seachValue)[resultKey];
};

export const capitalize = (string) => {
  if (!string){return ""}
  let newString = String(string).trim().split(" ");

  return newString.map(
    (item) =>
      item[0].toUpperCase() + item.slice(1, item.length).toLowerCase()
  ).join(" ");
};
