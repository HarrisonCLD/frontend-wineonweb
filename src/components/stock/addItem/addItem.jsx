import { useEffect, useState } from "react";

import GridImage from "@components/stock/gridImage";
import Popup from "@components/shared/popup/popup";

import { InputForm, ButtonEvent, SelectBox, CheckBox, SupprButton } from "@rowComponents";

import { filterAttribut, filterOptionAttribut } from "@helpers/formulaire.helper";
import { set_item } from "@helpers/api/item.api.helper";
import { useData } from "@providers/data.provider";
import { set_addstatus } from "../../../services/item.service";
import { useDispatch, useSelector } from "react-redux";

export default function AddItem() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { formdata } = useData();

  const [loader, setLoader] = useState("");

  const [item, setItem] = useState({});
  const [viewImage, setViewImage] = useState(null);
  const [attributCategorie, setAttributCategorie] = useState(formdata.attributCategorie);
  const [attributOptionAttribut, setAttributOptionAttribut] = useState(formdata.attributOptionAttribut);

  const result = useSelector((state) => state.Item.add_status);

  useEffect(() => {
    item.categorie && filterAttribut(formdata.attributCategorie, setAttributCategorie, item);
  }, [item]);

  useEffect(() => {
    item.attributCategorie && filterOptionAttribut(formdata.attributOptionAttribut, setAttributOptionAttribut, item);
  }, [item]);

  console.log(result);

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
            <SelectBox name="fournisseur" setState={setItem} data={formdata.fournisseur} index={0} />
            <SelectBox name="pays" data={formdata.pays} index={1} setState={setItem} />
            <SelectBox name="region" data={formdata.region} index={2} setState={setItem} />
          </div>
          <div className="attribut">
            <h4>Attributs</h4>
            <SelectBox name="categorie" data={formdata.categorie} index={3} setState={setItem} />
            <SelectBox name="attributCategorie" data={attributCategorie} index={4} setState={setItem} />
            <SelectBox name="optionAttribut" data={attributOptionAttribut} index={5} setState={setItem} />
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
            <ButtonEvent
              name="submitAddItem"
              onClick={() => {
                dispatch(set_addstatus("pending"));
                set_item(dispatch, item, token);
              }}
            >
              {loader === "pending" ? <IsLoading /> : "Ajouter un produit"}
            </ButtonEvent>
          </div>
        </div>
        {result === "success" ? (
          <Popup message={"Insertion du produit réussie !"}>
            <ButtonEvent onClick={() => dispatch(set_addstatus(""))}>OK</ButtonEvent>
          </Popup>
        ) : result === "error" ? (
          <Popup message={"Une erreur s'est produite lors de l'insertion du produit !"}>
            <ButtonEvent onClick={() => dispatch(set_addstatus(""))}>OK</ButtonEvent>
          </Popup>
        ) : null}
      </form>
    </>
  );
}
