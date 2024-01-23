import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonEvent } from "@rowComponents";
import { useDispatch } from "react-redux";

import { addtoCart } from "@services/cart.service";
import { set_view } from "@services/item.service";

export const VSmallCard = (props) => {
  return (
    <div className="vsmallcard">
      <img className="item_img" src={props.img} />
      <h3>{props.nom}</h3>
      <button>Fiche produit</button>
    </div>
  );
};

export const SmallCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [item, setItem] = useState(data);
  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <div className="smallcard" onClick={() => dispatch(set_view(item.id))}>
      <div className="top">
        <img className="img" src={`./src/assets/images/${item.image}`} alt={item.nom} />
      </div>
      <div className="bot">
        <h2>{item.nom}</h2>
        <div className="location">
          <p>{`${item.id_pays.nom} |`}</p>
          <p>{item.id_region.nom}</p>
        </div>
        <p className="price">{item.prix && item.prix[optionSelected]} €</p>
        <div className="option_attribut">
          {item.option_attribut &&
            item.option_attribut.map((row, i) => (
              <p
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setOptionSelected(i);
                }}
                className={optionSelected === i ? "selected" : ""}>
                {row}
              </p>
            ))}
        </div>
      </div>
      <ButtonEvent
        name="addcart"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            addtoCart({
              id: item.id,
              image: item.image,
              nom: item.nom,
              option_attribut: item.option_attribut[optionSelected],
              prix: item.prix[optionSelected],
            })
          );
        }}>
        +
      </ButtonEvent>
    </div>
  );
};
