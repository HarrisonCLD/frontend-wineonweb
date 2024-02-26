import axios from "axios";

import { set_status } from "@services/user.service";

const API = "http://localhost:10051";

export const check_authentification = async (dispatch, credentials, navigate) => {
  try {
    await axios({
      method: "post",
      url: `${API}/authentification/signin`,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res && res.status === 202) {
        dispatch(set_status({ status: "success" }));
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        navigate("/personal");
        setTimeout(() => dispatch(set_status("")), 600);
      } else if (res && res.data.message === "Données invalides !") {
        dispatch(set_status({ status: "error", message: "Nom de compte ou mot de passe invalide" }));
      } else {
        dispatch(set_status({ status: "error", message: "Une erreur est survenue" }));
      }
    });
  } catch (error) {
    dispatch(set_status("error"));
  }
};

export const set_newuser = async (credentials) => {
  try {
    await axios({
      method: "post",
      url: `${API}/authentification/signup`,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

export const get_user = async () => {
  const bearer = localStorage.getItem("token");
  try {
    const response = await axios({
      method: "post",
      url: `${API}/authentification/profile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
