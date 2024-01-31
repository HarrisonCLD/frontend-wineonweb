import { useEffect, useState } from "react";

import Isloading from "@messagebox/loadingbox/loading";

import { filterAttribut, filterOptionAttribut } from "@helpers/formulaire.helper";

import GridImage from "@components/stock/gridImage";
import { InputForm, ButtonEvent, Select, CheckBox } from "@rowComponents";
import { CloseButtonImageGrid, SupprButton } from "../../shared/rowComponents/rowComponents";

export default function AddItem({ authorization, data }) {
  const token = localStorage.getItem("token");
  const [viewImage, setViewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const [attributCategorie, setAttributCategorie] = useState(data.attributCategorie);
  const [attributOptionAttribut, setAttributOptionAttribut] = useState(data.attributOptionAttribut);

  useEffect(() => {
    formData.categorie && filterAttribut(data.attributCategorie, setAttributCategorie, formData);
  }, [formData]);

  useEffect(() => {
    formData.attributCategorie && filterOptionAttribut(data.attributOptionAttribut, setAttributOptionAttribut, formData);
  }, [formData]);

  return (
    <>
      {loading ? (
        <Isloading status={"En attente des données"} />
      ) : (
        <>
          {viewImage && <GridImage stateForm={formData} setStateForm={setFormData} setState={setViewImage} />}
          <form className="itemForm">
            <h3>Ajouter un Produit :</h3>
            <InputForm name="nom" state={formData} setState={setFormData} placeholder="Nom du produit..." />
            <InputForm name="description" state={formData} setState={setFormData} placeholder="Description du produit..." />
            <InputForm name="reference" state={formData} setState={setFormData} placeholder="Réference du produit..." />
            <Select name="region" state={formData} setState={setFormData}>
              {data.region &&
                data.region.map((region, i) => (
                  <option key={i} name="region" value={region.id}>
                    {region.nom}
                  </option>
                ))}
            </Select>
            <Select name="pays" state={formData} setState={setFormData}>
              {data.pays &&
                data.pays.map((pays, i) => (
                  <option key={i} name="pays" value={pays.id}>
                    {pays.nom}
                  </option>
                ))}
            </Select>
            <Select name="fournisseur" state={formData} setState={setFormData}>
              {data.fournisseur &&
                data.fournisseur.map((fournisseur, i) => (
                  <option key={i} name="fournisseur" value={fournisseur.id}>
                    {fournisseur.nom}
                  </option>
                ))}
            </Select>
            <Select name="categorie" state={formData} setState={setFormData}>
              {data.categorie &&
                data.categorie.map((categorie, i) => (
                  <option key={i} name="categorie" value={categorie.id}>
                    {categorie.nom}
                  </option>
                ))}
            </Select>
            <Select name="attributCategorie" state={formData} setState={setFormData}>
              {attributCategorie &&
                attributCategorie.map((attribut, i) => (
                  <option key={i} name="attribut" value={attribut.id_attribut.id}>
                    {attribut.id_attribut.nom}
                  </option>
                ))}
            </Select>
            <Select name="optionAttribut" state={formData} setState={setFormData}>
              {attributOptionAttribut &&
                attributOptionAttribut.map((optionAttr, i) => (
                  <option key={i} name="optionAttribut" value={optionAttr.id_option_attribut.id}>
                    {optionAttr.id_option_attribut.nom}
                  </option>
                ))}
            </Select>
            <InputForm state={formData} setState={setFormData} placeholder="Prix du produit..." name="prix" />
            <InputForm state={formData} setState={setFormData} placeholder="Quantité en stock..." name="qte_stock" />
            <InputForm state={formData} setState={setFormData} placeholder="Seuil de restock..." name="seuil_restock" />
            <InputForm state={formData} setState={setFormData} placeholder="Seuil notification de restock..." name="seuil_notif" />
            <CheckBox state={formData} setState={setFormData} name="restock_auto" label="Restock automatique" />
            <ButtonEvent name="image" onClick={() => setViewImage(true)}>
              <p>Ajouter une image</p>
            </ButtonEvent>
            <div className="imgPreview">
              {formData.image ? (
                <>
                  <SupprButton state={formData} setState={setFormData} />
                  <img src={`../../src/assets/images/${formData.image}`} alt="" />
                </>
              ) : (
                <p>Aucune image sélectionnée</p>
              )}
            </div>

            <ButtonEvent name="submitAddItem">
              <p>Ajouter un produit</p>
            </ButtonEvent>
          </form>
        </>
      )}
    </>
  );
}
