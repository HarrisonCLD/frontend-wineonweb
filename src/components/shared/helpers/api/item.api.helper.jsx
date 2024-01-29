import axios from "axios";

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
