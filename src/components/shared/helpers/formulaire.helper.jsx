import axios from "axios";

const pathAPI = "http://localhost:80";

export const submitForm = (e, route, submitdata) => {
  e.preventDefault();
};

export const filterAttribut = (state, setState, formData) => {
  const filtrer = state.filter((row) => row.id_categorie.toString() === formData.categorie.toString());
  setState(filtrer);
};

export const filterOptionAttribut = (state, setState, formData) => {
  const filtrer = state.filter((row) => row.id_attribut.toString() === formData.attributCategorie.toString());
  setState(filtrer);
};
