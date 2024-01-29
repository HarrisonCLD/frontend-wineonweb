import axios from "axios";
import { set_status } from "@services/user.service";

import { navigateTo } from "@helpers/navigation.helper";

import { set_token, set_user } from "@services/user.service";

const API = "http://localhost:10051";

export const check_authentification = async (dispatch, navigate, credentials) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}/authentification/signin`,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(set_token(`Bearer ${response.data.token}`));
    setTimeout(() => {
      dispatch(set_status("success"));
      setTimeout(() => {
        navigateTo(navigate, "/personal/info");
      }, 500);
    }, 1000);
  } catch (error) {
    setTimeout(() => {
      dispatch(set_status("error"));
    }, 1000);
  }
};

export const set_newuser = async (dispatch, navigate, credentials) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}/authentification/signup`,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      setTimeout(() => {
        dispatch(set_status("success"));
        setTimeout(() => {
          navigateTo(navigate, "/personal/info");
        }, 500);
      }, 1000);
    }
  } catch (error) {
    setTimeout(() => {
      dispatch(set_status("error"));
    }, 1000);
  }
};

export const get_user = async (dispatch, bearer) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/authentification/user/profile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${bearer}`,
      },
    });
    dispatch(set_user(response.data[0]));
  } catch (error) {
    dispatch(set_status("error"));
  }
};
