import axios from "axios";

const API = "http://localhost:10051";

export const call = async (method, endpoint, setState, options = null, bearer = null) => {
  try {
    const response = await axios({
      method: method,
      url: `${API}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (options != null) {
      response.data = options;
    }
    if (bearer != null) {
      response.headers.Authorization = bearer;
    }
    setState(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
