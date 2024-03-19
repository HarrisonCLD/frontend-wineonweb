import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LoadingAddCart from "@messagebox/loadingAddCart";

import { ButtonEvent } from "@rowComponents";

import { set_view } from "@services/item.service";
import { sendtocart } from "@helpers/cart.helper";

export const VSmallCard = ({ data }) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="vsmallcard" onClick={() => dispatch(set_view(data.id))}>
      <img className="item_img" src={`./src/assets/images/${data.image}.png`} />
      <h3>{data.nom}</h3>
      <Link to={`${data.id}`}>Fiche produit</Link>
    </div>
  );
};

export const SmallCard = ({ data }) => {
  const dispatch = useDispatch();
  const [optionSelected, setOptionSelected] = useState(0);
  const [status, setStatus] = useState("");

  return (
    <div className="smallcard" onClick={() => dispatch(set_view(data.id))}>
      <Link to={`${data.id}`} className="link">
        <div className="top">
          <img className="img" src={`./src/assets/images/${data.image}.png`} alt={data.nom} />
          <div className="name">
            <h2>{data.nom}</h2>
            <div className="location">
              <p>{`${data.pays} |`}</p>
              <p>{data.region}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="bot">
        <p className="price">{data.prix && data.prix[optionSelected]} €</p>
        <div className="option_attribut">
          {data.option_attribut &&
            data.option_attribut.map((row, i) => (
              <p
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setOptionSelected(i);
                }}
                className={optionSelected === i ? "selected" : ""}
              >
                {row}
              </p>
            ))}
        </div>
      </div>
      <ButtonEvent
        name="addcart"
        onClick={(e) => {
          e.stopPropagation();
          sendtocart(dispatch, setStatus, {
            id: data.id,
            image: data.image,
            nom: data.nom,
            option_attribut: data.option_attribut[optionSelected],
            prix: data.prix[optionSelected],
            stock: data.stock,
          });
        }}
        className={status != "" ? "pending" : null}
      >
        {status != "" ? <LoadingAddCart /> : "+"}
      </ButtonEvent>
    </div>
  );
};
