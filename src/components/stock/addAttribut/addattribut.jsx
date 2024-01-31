import { useState } from "react";
import { InputForm, ButtonEvent } from "@rowComponents";

import { set_attribut } from "@helpers/api/item.api.helper";

export default function AddAttribut() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});

  return (
    <form className="attributForm">
      <h3>Ajouter un Attribut</h3>
      <label htmlFor="nom">Nom</label>
      <InputForm state={formData} setState={setFormData} name={"nom"} />
      <ButtonEvent onClick={() => set_attribut(formData, token)}>Ajouter un attribut</ButtonEvent>
    </form>
  );
}
