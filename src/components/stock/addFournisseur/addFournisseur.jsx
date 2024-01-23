import { useEffect, useState } from "react";

import { InputForm, ButtonSubmit, Select } from "@rowComponents";

export default function AddFournisseur() {
  const token = localStorage.getItem("token");
  const [dataForm, setDataForm] = useState([]);
  const [addFournisseur, setAddFournisseur] = useState([]);

  return (
    <form className="fournisseurForm">
      <h3>Ajouter un Fournisseur</h3>
      <InputForm
        setState={setAddFournisseur}
        state={addFournisseur}
        placeholder="Nom du fournisseur..."
        name="nom"
      />
      <InputForm
        setState={setAddFournisseur}
        state={addFournisseur}
        placeholder="Adresse du fournisseur..."
        name="adresse"
      />
      <Select name="region" setState={setAddFournisseur} state={addFournisseur}>
        {/* {dataForm.region &&
            dataForm.region.map((region, index) => (
              <option key={index} name="region" value={region.id}>
                {region.nom}
              </option>
            ))} */}
      </Select>
      <Select name="pays" setState={setAddFournisseur} state={addFournisseur}>
        {/* {dataForm.pays &&
            dataForm.pays.map((pays, index) => (
              <option key={index} name="pays" value={pays.id}>
                {pays.nom}
              </option>
            ))} */}
      </Select>
      <ButtonSubmit name="submitAddFournisseur">
        {"Ajouter un fournisseur"}
      </ButtonSubmit>
    </form>
  );
}
