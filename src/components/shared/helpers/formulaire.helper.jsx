export const filterAttribut = (state, setState, formData) => {
  const filtrer = state.filter(
    (row) => row.id_categorie.toString() === formData.categorie.toString()
  );
  setState(filtrer);
};

export const filterOptionAttribut = (state, setState, formData) => {
  const filtrer = state.filter(
    (row) => row.id_attribut.toString() === formData.attributCategorie.toString()
  );
  setState(filtrer);
};
