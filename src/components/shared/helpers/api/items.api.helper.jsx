import axios from "axios";

import { set_status } from "@services/user.service";

const API = "http://localhost:10051";

export const get_items = async (dispatch, setState) => {
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
