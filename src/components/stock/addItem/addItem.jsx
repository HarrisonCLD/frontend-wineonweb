import { useState } from "react";

import {
  InputForm,
  ButtonEvent,
  ButtonSubmit,
  Select,
  CheckBox,
} from "@rowComponents";

export default function AddItem() {
  const token = localStorage.getItem("token");
  const [dataForm, setDataForm] = useState([]);
  const [filteredAttribut, setFilteredAttribut] = useState([]);
  const [filteredOptionAttribut, setFilteredOptionAttribut] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [imageToAdd, setImgToAdd] = useState({});

  const [addImage, setAddImage] = useState(false);

  //   const appearImage = () => {
  //     setAddImage(!addImage);
  //   };

  //   const selectedImage = (image) => {
  //     setAddImage(false);
  //     setImgToAdd(image);
  //   };

  //   useEffect(() => {
  //     allData(setDataForm);
  //   }, []);

  return (
    <form onSubmit={""} className="itemForm">
      <h3>Ajouter un Produit :</h3>
      <InputForm
        name="nom"
        state={addItem}
        setState={setAddItem}
        placeholder="Nom du produit..."
      />
      <InputForm
        name="description"
        state={addItem}
        setState={setAddItem}
        placeholder="Description du produit..."
      />
      <InputForm
        name="reference"
        state={addItem}
        setState={setAddItem}
        placeholder="Réference du produit..."
      />
      <Select name="region" setState={setAddItem} state={addItem}>
        {/* {dataForm.region &&
              dataForm.region.map((region, index) => (
                <option key={index} name="region" value={region.id}>
                  {region.nom}
                </option>
              ))} */}
      </Select>
      <Select name="pays" setState={setAddItem} state={addItem}>
        {/* {dataForm.pays &&
              dataForm.pays.map((pays, index) => (
                <option key={index} name="pays" value={pays.id}>
                  {pays.nom}
                </option>
              ))} */}
      </Select>
      <Select name="fournisseur" setState={setAddItem} state={addItem}>
        {/* {dataForm.fournisseur &&
              dataForm.fournisseur.map((fournisseur, index) => (
                <option key={index} name="fournisseur" value={fournisseur.id}>
                  {fournisseur.nom}
                </option>
              ))} */}
      </Select>
      <Select
        name="categorie"
        func={(event) =>
          changeCategorie(
            event,
            dataForm,
            "attributCategorie",
            "id_categorie",
            setFilteredAttribut
          )
        }
        setState={setAddItem}
        state={addItem}>
        {/* {dataForm.categorie &&
              dataForm.categorie.map((categorie, index) => (
                <option key={index} name="categorie" value={categorie.id}>
                  {categorie.nom}
                </option>
              ))} */}
      </Select>
      <Select
        name="attributCategorie"
        func={(event) =>
          changeCategorie(
            event,
            dataForm,
            "attributOptionAttribut",
            "id_attribut",
            setFilteredOptionAttribut
          )
        }
        setState={setAddItem}
        state={addItem}>
        {filteredAttribut &&
          filteredAttribut.map((attributCategorie, index) => (
            <option
              key={index}
              name="attribut"
              value={attributCategorie.id_attribut.id}>
              {attributCategorie.id_attribut.nom}
            </option>
          ))}
      </Select>
      <Select name="optionAttribut" setState={setAddItem} state={addItem}>
        {filteredOptionAttribut &&
          filteredOptionAttribut.map((optionAttribut, index) => (
            <option
              key={index}
              name="optionAttribut"
              value={optionAttribut.id_option_attribut.id}>
              {optionAttribut.id_option_attribut.nom}
            </option>
          ))}
      </Select>
      <InputForm
        setState={setAddItem}
        state={addItem}
        placeholder="Prix du produit..."
        name="prix"
      />
      <InputForm
        setState={setAddItem}
        state={addItem}
        placeholder="Quantité en stock..."
        name="qte_stock"
      />
      <InputForm
        setState={setAddItem}
        state={addItem}
        placeholder="Seuil de restock..."
        name="seuil_restock"
      />
      <InputForm
        setState={setAddItem}
        state={addItem}
        placeholder="Seuil notification de restock..."
        name="seuil_notif"
      />

      <CheckBox
        name="restock_auto"
        label="Restock automatique"
        setState={setAddItem}
        state={addItem}
      />
      <div className="validation">
        <ButtonEvent
          name="image"
          onClick={() => {
            appearImage();
          }}>
          {"Ajouter une image"}
        </ButtonEvent>
        {/* {imageToAdd.nom ? (
              <>
                <img src={`./src/images/${imageToAdd.nom}`} />
                <p className="imgOn">Visualisation du produit</p>
              </>
            ) : (
              <p className="imgOff">Aucune image sélectionner</p>
            )} */}

        <ButtonSubmit name="submitAddItem">{"Ajouter un produit"}</ButtonSubmit>
      </div>
    </form>
  );
}
