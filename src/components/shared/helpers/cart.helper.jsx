import { addtoCart } from "@services/cart.service";
import { showCart } from "../../../services/cart.service";

export const sendtocard = (dispatch, setState, item, optionSelected) => {
  setState("loading");
  dispatch(
    addtoCart({
      id: item.id,
      image: item.image,
      nom: item.nom,
      option_attribut: item.option_attribut[optionSelected],
      prix: item.prix[optionSelected],
    })
  );
};

export const handleClickOutside = (event, ref, dispatch) => {
  if (panierRef.current && !panierRef.current.contains(event.target)) {
    dispatch(showCart());
  }
  // window.addEventListener("click", handleClickOutside);

  // return () => {
  //   window.removeEventListener("click", handleClickOutside);
  // };
};
