import { useState } from "react";

import { InputForm, ButtonSubmit, Select } from "@rowComponents";

export default function AddFournisseur({ data }) {
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
        {data.region.map((region, i) => (
          <option key={i} name="region" value={region.id}>
            {region.nom}
          </option>
        ))}
      </Select>
      <Select name="pays" setState={setAddFournisseur} state={addFournisseur}>
        {data.pays.map((pays, i) => (
          <option key={i} name="pays" value={pays.id}>
            {pays.nom}
          </option>
        ))}
      </Select>
      <ButtonSubmit>
        <p>Ajouter un fournisseur</p>
      </ButtonSubmit>
    </form>
  );
}
