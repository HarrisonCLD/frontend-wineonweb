import axios from "axios";

const API = "http://localhost:10051";

export const get_dataform = async (setState) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}/dataform`,
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
