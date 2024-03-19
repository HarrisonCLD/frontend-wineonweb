import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// import SendToCart from "@messagebox/sendtocart";
import LoadingAddCart from "@messagebox/loadingAddCart";

import { CloseButtonItemCard } from "@rowComponents";
import { get_item } from "@helpers/api/item.api.helper";

import { sendtocart } from "@helpers/cart.helper";

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
        <img
          className="product_image_view_item"
          src={`./src/assets/images/${item.image}.png`}
          alt=""
        />
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
        </div>
        <div className="bot">
          <div className="price">
            <p>Prix :</p>
            <p>{item.prix && `${item.prix[optionSelected]} €`}</p>
          </div>
          <hr />
          <div className="options">
            <ul>
              {item.option_attribut &&
                item.option_attribut.map((option, i) => (
                  <li
                    key={i}
                    className={optionSelected === i ? "on" : ""}
                    onClick={() => setOptionSelected(i)}
                  >
                    <a>{option}</a>
                  </li>
                ))}
            </ul>
          </div>
          <button
            onClick={() => {
              sendtocart(dispatch, setStatus, {
                id: item.id,
                image: item.image,
                nom: item.nom,
                option_attribut: item.option_attribut[optionSelected],
                prix: item.prix[optionSelected],
                stock: item.stock,
              });
            }}
          >
            {status != "" ? <LoadingAddCart /> : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </div>
  );
}
