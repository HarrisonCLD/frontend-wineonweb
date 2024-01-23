import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CloseButtonItemCard } from "@rowComponents";
import SendToCart from "@messagebox/sendtocart";

import { sendtocard } from "@helpers/cart.helper";

export default function ItemCard({ id, data, active }) {
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [status, setStatus] = useState("");
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    setItem(data.find((row) => row.id === id));
  }, [data]);

  return (
    <div className={active ? "itemcard viewing" : "itemcard"}>
      {status != "" ? (
        <SendToCart state={status} setState={setStatus} />
      ) : (
        <>
          <CloseButtonItemCard close={dispatch} />
          <div className="left">
            <img className="product_image_view_item" src={`./src/assets/images/${item.image}`} alt="" />
          </div>
          <div className="right">
            <h2>{item.nom}</h2>
            <div className="type">
              <span>Type de vin</span>
              <p>Rouge</p>
            </div>
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
            <p>{item.description}</p>
            <div className="price">
              <p>Prix</p>
              <p>{item.prix && item.prix[optionSelected]}</p>
            </div>
            <button
              onClick={() => {
                setStatus("loading");
                sendtocard(dispatch, setStatus, item, optionSelected);
              }}>
              Ajouter au panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}
