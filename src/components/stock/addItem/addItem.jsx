import { useEffect, useState } from "react";

import GridImage from "@components/stock/gridImage";
import { InputForm, ButtonEvent, Select, CheckBox, SupprButton } from "@rowComponents";

import { filterAttribut, filterOptionAttribut } from "@helpers/formulaire.helper";
import { set_item } from "@helpers/api/item.api.helper";
import { useData } from "@providers/data.provider";

export default function AddItem() {
  const token = localStorage.getItem("token");
  const { formdata } = useData();

  const [item, setItem] = useState({});
  const [viewImage, setViewImage] = useState(null);
  const [attributCategorie, setAttributCategorie] = useState(formdata.attributCategorie);
  const [attributOptionAttribut, setAttributOptionAttribut] = useState(formdata.attributOptionAttribut);

  useEffect(() => {
    item.categorie && filterAttribut(formdata.attributCategorie, setAttributCategorie, item);
  }, [item]);

  useEffect(() => {
    item.attributCategorie && filterOptionAttribut(formdata.attributOptionAttribut, setAttributOptionAttribut, item);
  }, [item]);

  return (
    <>
      {viewImage && <GridImage data={formdata.images} stateForm={item} setStateForm={setItem} setState={setViewImage} />}
      <form className="itemForm">
        <h3>Ajouter un Produit :</h3>
        <hr />
        <div>
          <div className="informations">
            <h4>Informations</h4>
            <InputForm name="nom" state={item} setState={setItem} placeholder="Nom du produit..." />
            <InputForm name="reference" state={item} setState={setItem} placeholder="Réference du produit..." />
            <textarea
              name="description"
              value={item.description}
              onChange={(e) => setItem({ ...item, description: e.target.value })}
              placeholder="Description du produit..."
            />
          </div>
          <div className="provenance">
            <h4>Provenance</h4>
            <Select name="fournisseur" state={item} setState={setItem}>
              {formdata.fournisseur.map((fournisseur, i) => (
                <option key={i} name="fournisseur" value={fournisseur.id}>
                  {fournisseur.nom}
                </option>
              ))}
            </Select>
            <Select name="pays" state={item} setState={setItem}>
              {formdata.pays.map((pays, i) => (
                <option key={i} name="pays" value={pays.id}>
                  {pays.nom}
                </option>
              ))}
            </Select>
            <Select name="region" state={item} setState={setItem}>
              {formdata.region.map((region, i) => (
                <option key={i} name="region" value={region.id}>
                  {region.nom}
                </option>
              ))}
            </Select>
          </div>
          <div className="attribut">
            <h4>Attributs</h4>
            <Select name="categorie" state={item} setState={setItem}>
              {formdata.categorie.map((categorie, i) => (
                <option key={i} name="categorie" value={categorie.id}>
                  {categorie.nom}
                </option>
              ))}
            </Select>
            <Select name="attributCategorie" state={item} setState={setItem}>
              {attributCategorie.map((attribut, i) => (
                <option key={i} name="attribut" value={attribut.id_attribut.id}>
                  {attribut.id_attribut.nom}
                </option>
              ))}
            </Select>
            <Select name="optionAttribut" state={item} setState={setItem}>
              {attributOptionAttribut.map((optionAttr, i) => (
                <option key={i} name="optionAttribut" value={optionAttr.id_option_attribut.id}>
                  {optionAttr.id_option_attribut.nom}
                </option>
              ))}
            </Select>
            <InputForm state={item} setState={setItem} placeholder="Prix du produit..." name="prix" />
          </div>
          <div className="stock">
            <h4>Stock</h4>
            <InputForm state={item} setState={setItem} placeholder="Quantité en stock..." name="qte_stock" />
            <InputForm state={item} setState={setItem} placeholder="Seuil de restock..." name="seuil_restock" />
            <InputForm state={item} setState={setItem} placeholder="Seuil notification de restock..." name="seuil_notif" />
            <CheckBox state={item} setState={setItem} name="restock_auto" label="Restock automatique" />
          </div>
          <div className="end">
            <ButtonEvent name="image" onClick={() => setViewImage(true)}>
              <p>Ajouter une image</p>
            </ButtonEvent>
            <div className="imgPreview">
              {item.image ? (
                <>
                  <SupprButton state={item} setState={setItem} />
                  <img src={`../../src/assets/images/${item.image}.png`} alt="" />
                </>
              ) : (
                <p>Aucune image sélectionnée</p>
              )}
            </div>
            <div className="commentaire">
              <h4>Commentaire</h4>
              <textarea name="commentaire" placeholder="Renseigner un commentaire" cols="30" rows="10" />
            </div>
            <ButtonEvent name="submitAddItem" onClick={() => set_item(item, token)}>
              <p>Ajouter un produit</p>
            </ButtonEvent>
          </div>
        </div>
      </form>
    </>
  );
}
