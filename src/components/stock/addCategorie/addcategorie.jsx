import { useState } from "react";
import { InputForm, ButtonEvent } from "@rowComponents";

import { set_categorie } from "@helpers/api/dataform.api.helper";

export default function AddCategorie() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});

  return (
    <form className="categorieForm">
      <h3>Ajouter une catégorie de produit :</h3>
      <hr />
      <label htmlFor="nom">Nom</label>
      <InputForm state={formData} setState={setFormData} name={"nom"} placeholder={"Nom de la catégorie..."} />
      <ButtonEvent onClick={() => set_categorie(formData, token)}>Ajouter la catégorie</ButtonEvent>
    </form>
  );
}
