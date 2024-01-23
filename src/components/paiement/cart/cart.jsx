import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ButtonNavigation } from "@components/shared/rowComponents";

import { navigateTo } from "@helpers/navigation.helper";
import { handleClickOutside } from "@helpers/cart.helper";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartRef = useRef(null);
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

  useEffect(() => {
    handleClickOutside(e, cartRef, dispatch);
    window.addEventListener("click", handleClickOutside());
    return () => {
      window.removeEventListener("click", handleClickOutside());
    };
  }, [cartRef]);

  return toggleCart && <div className="cart" ref={cartRef}></div>;
}
