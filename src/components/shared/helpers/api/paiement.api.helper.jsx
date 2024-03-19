import { fetchData, setData } from "./dataform.api.helper";

export const set_paiement = async (body, bearer) => {
  return setData("/paiement", body, bearer);
};

export const get_order = async () => {
  const bearer = localStorage.getItem("token");
  return fetchData("/paiement/order", bearer);
};
