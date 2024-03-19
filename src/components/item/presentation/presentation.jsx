import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonEvent } from "@rowComponents";

import { addtoCart } from "@services/cart.service";
import { sendtocart } from "@helpers/cart.helper";

export default function PresentationShop({ data }) {
  const view = useSelector((state) => state.Item.view);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    data.map((row) => row.forward === 1 && setItem(row));
  }, [data]);

  return (
    <>
      <section className={view ? "presentation wait" : "presentation"}>
        <div className="page_accueil_column1">
          <h1>Découvrez nos vins</h1>
          <p>{item.description}</p>
        </div>
        <div className="page_accueil_column2">
          <h2>{item.nom}</h2>
          <p>{item.description}</p>
          <span>
            <p>{item.prix} €</p>
            <ButtonEvent
              onClick={() =>
                sendtocart(dispatch, setStatus, {
                  id: item.id,
                  image: item.image,
                  nom: item.nom,
                  option_attribut: item.option_attribut[0],
                  prix: item.prix[0],
                  stock: item.stock,
                })
              }
            >
              Ajouter au panier
            </ButtonEvent>
          </span>
        </div>
        <img className="page_accueil_bottle_img" src={`./src/assets/images/wine-bottle2.png`} />
        <img className="page_accueil_bg_img" src="./src/assets/png/grape.png" />
      </section>
    </>
  );
}
