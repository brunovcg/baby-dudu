import axios from "axios";

const settings = {
  env: {
    prod: "https://dudu-baby.herokuapp.com/",
    dev: "http://localhost:8000/api/",
  },
};

const getEnv = () => {
  return settings.env[process.env.REACT_APP_ENV];
};

const getToken = () =>
  JSON.parse(sessionStorage.getItem("@baby-dudu:token")) || "";

const configs = {
  headers: { Authorization: "Token " + getToken() },
};

const api = () => {
  return axios.create({ baseURL: getEnv() });
};

export const babyDuduServices = () => {
  return {
    user: {
      login: (payload) =>
        api()
          .post("login/", payload)
          .then((res) => {
            sessionStorage.setItem(
              "@baby-dudu:token",
              JSON.stringify(res.data.token)
            );
          }),
      logoff: () => sessionStorage.removeItem("@baby-dudu:token"),
      signup: (payload) => api().post("signup/", payload),
    },
    products: {
      getAll: () => api().get("products/"),
      update: (product_id, payload) =>
        api().patch(`products/${product_id}/`, payload, configs),
      delete: (product_id) => api().delete(`products/${product_id}/`, configs),
      deleteAll: () => api().delete("products/", configs),
      create: (payload) => api().post("products/", payload, configs),
      massiveLoad: (payload) =>
        api().post("products/massiveload/", payload, configs),
    },
    categories: {
      getAll: () => api().get("categories/", configs),
      delete: (category_id) =>
        api().delete(`categories/${category_id}/`, configs),
      deleteAll: () => api().delete("categories/", configs),
      update: (category_id, payload) =>
        api().patch(`categories/${category_id}/`, payload, configs),
    },
  };
};
