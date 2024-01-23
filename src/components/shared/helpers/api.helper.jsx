import axios from "axios";

const API = "http://localhost:10051";

export const get_items = async (endpoint, setState) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}${endpoint}`,
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
export const set_data = async (endpoint, options = {}) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API}${endpoint}`,
      data: options,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// export const update_data = async (endpoint, options = {}) => {
//   axios({
//     method: "post",
//     url: `${API}${endpoint}`,
//     data: options,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
