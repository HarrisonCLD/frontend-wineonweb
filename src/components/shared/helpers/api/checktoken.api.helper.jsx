import { setData } from "./dataform.api.helper";

export const checktoken = async () => {
  const token = localStorage.getItem("token");
  setData("/authentification/token", {}, token);
};
