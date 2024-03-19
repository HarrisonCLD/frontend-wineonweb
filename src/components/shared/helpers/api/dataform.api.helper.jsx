import axios from "axios";

const API = "http://localhost:10051";

// SCHEMA
export const setData = async (path, state, bearer = null) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}${path}`,
      data: state,
      headers: {
        "Content-Type": "application/json",
        ...(bearer && { Authorization: bearer }),
      },
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

export const fetchData = async (path, bearer = null) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}${path}`,
      headers: {
        "Content-Type": "application/json",
        ...(bearer && { Authorization: bearer }),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// GETTER
export const get_data_signup = async () => {
  return fetchData("/data/datasignup");
};
export const get_dataform = async () => {
  return fetchData("/data/dataform");
};

export const get_images = async () => {
  fetchData("/data/images");
};

// SETTER
export const set_categorie = async (state, bearer) => {
  setData("/data/categorie", state, bearer);
};
export const set_attribut = async (state, bearer) => {
  setData("/data/attribut", state, bearer);
};
export const set_fournisseur = async (state, bearer) => {
  setData("/data/fournisseur", state, bearer);
};
export const set_optionAttribut = async (state, bearer) => {
  setData("/data/optionattribut", state, bearer);
};
