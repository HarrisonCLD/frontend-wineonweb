import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ButtonEvent } from "@components/shared/rowComponents";

import { increaseItem, decreaseItem } from "@services/cart.service";

import { navigateTo } from "@helpers/navigation.helper";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.Cart.items);
  const toggleCart = useSelector((state) => state.Cart.show);

  return (
    toggleCart && (
      <div className={cartList.length > 0 ? "cart_content" : "cart_content void"}>
        <ul>
          {cartList.length > 0 ? (
            cartList.map((item) => (
              <li key={item.id}>
                <p>{item.nom}</p>
                <div className="qte_box">
                  <p>{item.option_attribut}</p>
                  <p>{item.prix}€</p>
                  <p>{item.quantite}</p>
                  <img src="./src/images/plus-icon.svg" onClick={() => dispatch(increaseItem(item.id))} />
                  <img src="./src/images/minus-icon.svg" onClick={() => dispatch(decreaseItem(item.id))} />
                </div>
              </li>
            ))
          ) : (
            <p>Panier vide</p>
          )}
        </ul>
        <ButtonEvent className={cartList.length > 0 ? "active" : ""} onClick={() => cartList.length > 0 && navigateTo(navigate, "/paiement")}>
          Paiement
        </ButtonEvent>
      </div>
    )
  );
}
