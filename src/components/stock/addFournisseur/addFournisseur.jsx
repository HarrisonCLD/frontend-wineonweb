import { useState } from "react";
import { useData } from "../../../providers/data.provider";

import { set_fournisseur } from "@helpers/api/dataform.api.helper";

import { InputForm, ButtonEvent, Select } from "@rowComponents";

export default function AddFournisseur() {
  const { formdata } = useData();
  const token = localStorage.getItem("token");
  const [fournisseur, setFournisseur] = useState({});

  return (
    <form className="fournisseurForm">
      <h3>Ajouter un Fournisseur</h3>
      <InputForm setState={setFournisseur} state={fournisseur} placeholder="Nom du fournisseur..." name="nom" />
      <InputForm setState={setFournisseur} state={fournisseur} placeholder="Adresse du fournisseur..." name="adresse" />
      <Select name="id_region" setState={setFournisseur} state={fournisseur}>
        {formdata.region.map((region, i) => (
          <option key={i} name="region" value={region.id}>
            {region.nom}
          </option>
        ))}
      </Select>
      <Select name="id_pays" setState={setFournisseur} state={fournisseur}>
        {formdata.pays.map((pays, i) => (
          <option key={i} name="pays" value={pays.id}>
            {pays.nom}
          </option>
        ))}
      </Select>
      <ButtonEvent onClick={() => set_fournisseur(fournisseur, token)}>
        <p>Ajouter un fournisseur</p>
      </ButtonEvent>
    </form>
  );
}
