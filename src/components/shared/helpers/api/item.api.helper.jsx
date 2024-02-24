import axios from "axios";
import { Navigate } from "react-router-dom";

import { fetchData, setData } from "./dataform.api.helper";

const API = "http://localhost:10051";

// GETTER
export const get_item = async (id, setState) => {
  axios({
    method: "get",
    url: `${API}/items/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => setState(response.data));
};

export const get_items = async () => {
  return fetchData("/items/all");
};

export const get_items_stock = async (setState, bearer) => {
  fetchData("/items/private/items", setState, bearer);
};

// SETTER
export const set_item = async (state, bearer) => {
  setData("/items/add", state, bearer);
};
