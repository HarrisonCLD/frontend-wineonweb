import axios from "axios";
import { Navigate } from "react-router-dom";

import { fetchData, setData } from "./dataform.api.helper";
import { set_addstatus } from "../../../../services/item.service";

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

export const get_stock_items = async (data, bearer) => {
  fetchData("/items/check/stock");
};

// SETTER
export const set_item = async (dispatch, state, bearer) => {
  try {
    await axios({
      method: "post",
      url: `${API}/items/add`,
      data: state,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    }).then((res) => {
      if (res && res.data.message === "Insertion réussie !") {
        dispatch(set_addstatus("success"));
      } else {
        dispatch(set_addstatus("error"));
      }
    });
  } catch (error) {
    dispatch(set_status("error"));
  }
};
