import axios from "axios";

const pathAPI = "http://localhost:80";

export const submitForm = (e, route, submitdata) => {
  e.preventDefault();
  console.log(submitdata);
};
