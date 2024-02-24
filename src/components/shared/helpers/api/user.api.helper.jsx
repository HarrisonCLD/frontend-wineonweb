import axios from "axios";

import { set_status } from "@services/user.service";
import { set_user } from "@services/user.service";

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
      dispatch(set_status("success"));
      localStorage.setItem("token", `Bearer ${res.data.token}`);
      navigate("/personal");
      setTimeout(() => dispatch(set_status("signin")), 700);
    });
  } catch (error) {
    console.log(error);
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
