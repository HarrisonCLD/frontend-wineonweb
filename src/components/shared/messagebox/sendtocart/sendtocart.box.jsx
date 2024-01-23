import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import IsLoading from "@messagebox/loadingbox";
import SuccessBox from "@messagebox/successbox";
import AlertBox from "@messagebox/errorbox";

export default function SendToCart({ state, setState }) {
  const cart = useSelector((state) => state.Cart.items);
  useEffect(() => {
    setTimeout(() => {
      setState("success");
    }, 600);
  }, [cart.length]);

  let view = <IsLoading />;

  switch (state) {
    case "loading":
      view = <IsLoading status={"Ajout au panier en cours"} />;
      break;
    case "success":
      view = <SuccessBox />;
      setTimeout(() => {
        setState("");
      }, 1500);
      break;
    case "echec":
      view = (
        <AlertBox
          action={() => setState("")}
          message={
            <p>
              Erreur de l'ajout au panier !<br />
              Veuilez réessayer plus tard...
            </p>
          }
        />
      );
      break;
  }

  return view;
}
