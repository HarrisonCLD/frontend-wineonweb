import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CloseButtonItemCard } from "@rowComponents";
import SendToCart from "@messagebox/sendtocart";

import { get_item } from "@helpers/api/item.api.helper";

import { sendtocart } from "@helpers/cart.helper";
import { useParams } from "react-router-dom";
import LoadingAddCart from "@messagebox/loadingAddCart";

export default function ItemCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [status, setStatus] = useState("");
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await get_item(id, setItem);
    }
    fetchData();
  }, []);

  return (
    <div className="itemcard">
      <CloseButtonItemCard path={"/"} close={dispatch} />
      <div className="left">
        <img className="product_image_view_item" src={`./src/assets/images/${item.image}.png`} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <div className="title">
            <h2>{item.nom}</h2>
            <p>Vin Rouge</p>
          </div>
          <div className="type">
            <span></span>
          </div>
          <p className="description">{item.description}</p>
          <div className="price">
            <p>{item.prix && `${item.prix[optionSelected]} €`}</p>
          </div>
        </div>
        <div className="bot">
          <div className="options">
            <ul>
              {item.option_attribut &&
                item.option_attribut.map((option, i) => (
                  <li key={i}>
                    <a onClick={() => setOptionSelected(i)}>{option}</a>
                  </li>
                ))}
            </ul>
          </div>
          <button
            onClick={() => {
              sendtocart(dispatch, setStatus, item, optionSelected);
            }}
          >
            {status != "" ? <LoadingAddCart /> : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </div>
  );
}
