export const filterAttribut = (state, setState, formData) => {
  const filtrer = state.filter((row) => row.id_categorie.toString() === formData.categorie.toString());
  const result = filtrer.map((row) => row.id_attribut);
  setState(result);
};

export const filterOptionAttribut = (state, setState, formData) => {
  const filtrer = state.filter((row) => row.id_attribut.toString() === formData.attributCategorie.toString());
  const result = filtrer.map((row) => row.id_option_attribut);
  setState(result);
};
