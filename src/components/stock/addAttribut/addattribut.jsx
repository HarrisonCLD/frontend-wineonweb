import { useState } from "react";
import { InputForm, ButtonEvent } from "@rowComponents";

import { set_attribut } from "@helpers/api/dataform.api.helper";

export default function AddAttribut() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});

  return (
    <form className="attributForm">
      <h3>Ajouter un Attribut</h3>
      <hr />
      <label htmlFor="nom">Nom</label>
      <InputForm state={formData} setState={setFormData} name={"nom"} placeholder={"Nom de l'attribut..."} />
      <ButtonEvent onClick={() => set_attribut(formData, token)}>Ajouter un attribut</ButtonEvent>
    </form>
  );
}
