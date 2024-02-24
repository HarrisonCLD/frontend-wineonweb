import { useState } from "react";
import { InputForm, ButtonEvent } from "@rowComponents";

import { set_optionAttribut } from "@helpers/api/dataform.api.helper";

export default function AddOptionAttribut() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});

  return (
    <form className="optionAttributForm">
      <h3>Ajouter une Option d'attribut</h3>
      <hr />
      <label htmlFor="nom">Nom</label>
      <InputForm state={formData} setState={setFormData} name={"nom"} placeholder={"Nom de l'option d'attribut..."} />
      <ButtonEvent onClick={() => set_optionAttribut(formData, token)}>Ajouter l'option d'attribut</ButtonEvent>
    </form>
  );
}
