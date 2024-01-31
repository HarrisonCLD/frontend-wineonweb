import { useState } from "react";
import { InputForm, ButtonEvent } from "@rowComponents";
import { set_categorie } from "@helpers/api/item.api.helper";

export default function AddCategorie() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});

  return (
    <form className="categorieForm">
      <h3>Ajouter une catégorie de produit :</h3>
      <label htmlFor="nom">Nom</label>
      <InputForm state={formData} setState={setFormData} name={"nom"} />
      <ButtonEvent onClick={() => set_categorie(formData, token)}>Ajouter la catégorie</ButtonEvent>
    </form>
  );
}
