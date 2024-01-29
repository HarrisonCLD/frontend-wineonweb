import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ButtonEvent } from "@components/shared/rowComponents";

import { navigateTo } from "@helpers/navigation.helper";
import { handleClickOutside } from "@helpers/cart.helper";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.Cart.items);
  const toggleCart = useSelector((state) => state.Cart.show);

  // const changeQte = (id, action) => {
  //   const filterCart = cartList.filter((item) => item.id === id);
  //   if (filterCart.length > 0) {
  //     if (action === "increase") {
  //       dispatch(increaseItem({ id }));
  //     } else {
  //       dispatch(decreaseItem({ id }));
  //     }
  //   }
  // };

  // const switchToPaiement = () => {
  //   navigate("/paiement");
  // };

  // useEffect(() => {
  //   handleClickOutside(e, cartRef, dispatch);
  //   window.addEventListener("click", handleClickOutside());
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside());
  //   };
  // }, [cartRef]);

  return (
    toggleCart && (
      <div className="cart_content">
        <ul>
          {cartList.length > 0 ? (
            cartList.map((item) => (
              <li key={item.id}>
                <p>{item.nom}</p>
                <div className="qte_box">
                  <p>{item.contenance}</p>
                  <p>{item.prix}€</p>
                  <p>{item.quantite}</p>
                  <img src="./src/images/plus-icon.svg" onClick={() => changeQte(item.id, "increase")} />
                  <img src="./src/images/minus-icon.svg" onClick={() => changeQte(item.id, "decrease")} />
                </div>
              </li>
            ))
          ) : (
            <p>Panier vide</p>
          )}
        </ul>
        <ButtonEvent onClick={() => navigateTo(navigate, "/paiement")}>Paiement</ButtonEvent>
      </div>
    )
  );
}
