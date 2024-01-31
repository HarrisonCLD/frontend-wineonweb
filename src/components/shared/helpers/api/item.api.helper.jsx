import axios from "axios";
import { Navigate } from "react-router-dom";

const API = "http://localhost:10051";

export const get_items = async (setState) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/items`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setState(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get_items_stock = async (setState, bearer) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/items`,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
    setState(response.data);
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const get_images = async (setState) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/dataform/images`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setState(response.data);
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const set_categorie = async (data, bearer) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}/items/categorie`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const set_attribut = async (data, bearer) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}/items/attribut`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};

export const set_optionAttribut = async (data, bearer) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}/items/optionattribut`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
  } catch (error) {
    return <Navigate to={"/"} />;
  }
};
