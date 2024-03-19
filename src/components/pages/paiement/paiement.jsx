import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaiementForm from "../../paiement/paiementForm/paiementform";
import IsLoading from "@messagebox/loadingAddCart";
import Popup from "@components/shared/popup/popup";

import { ButtonEvent } from "@rowComponents";
import { set_paiement } from "../../shared/helpers/api/paiement.api.helper";
import { SelectCartQte } from "../../shared/rowComponents/rowComponents";

const Paiement = () => {
  const cart = useSelector((state) => state.Cart.items);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState("");
  const [reglementation, setReglementation] = useState("");
  const [error, setError] = useState("");
  const [paiement, setPaiement] = useState(false);
  const [quantity, setQuantity] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [finalCart, setFinalCart] = useState(cart.slice());

  const stripePromise = loadStripe(
    "pk_test_51OfIilANuq6Fnnmq4A3MbPWlv1dfOZJah9CHf9qX0oXGh7vna9bePEOeAGaFBaj4CVRjwyBAqQD5mtaSckaVdNAg00hpwGCy8V"
  );

  const validate_cart = async () => {
    if (cart.length > 0) {
      if (reglementation != "") {
        setLoader("pending");
        const token = localStorage.getItem("token");
        if (token) {
          const buy = {
            cart: cart,
            price: total.toFixed(1),
            reglementation: reglementation,
          };
          const paiement = await set_paiement(buy, token);
          console.log(paiement);
          if (paiement && paiement.code === 1) {
            console.log(paiement.code);
            console.log("ici");
            setLoader("");
            setPaiement(true);
          }
        } else {
          setError("Veuillez vous connectez pour pouvoir poursuivre votre achat");
          setLoader("");
        }
      } else {
        setError("Aucun moyen de paiement choisi");
        setLoader("");
      }
    } else {
      setError("Aucun article présent dans le panier");
      setLoader("");
    }
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((row) => {
      if (row.quantite > 0) {
        const count = row.prix * row.quantite;
        total += count;
      } else {
        total += row.prix;
      }
    });
    setTotal(total);
  }, [cart]);
  console.log(paiement);
  return (
    <section className="paiement">
      <div className="cartlist">
        <p className="cart">Panier</p>
        <ul>
          {cart.map((item, i) => (
            <li key={i} className="product">
              <img src={`./src/assets/images/${item.image}.png`} alt="#" />
              <div className="right">
                <div className="name">
                  <p>{item.nom}</p>
                  <p>{item.option_attribut}</p>
                </div>
                <div className="inbuy">
                  <SelectCartQte
                    defaultValue={item.quantite}
                    item={item}
                    data={quantity}
                    state={finalCart}
                    setState={setFinalCart}
                    index={0}
                  />
                  <p>{item.prix} €</p>
                </div>
              </div>
              <p className="supp-line">Supprimer l'article</p>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="buying">
        <h3>Moyen de paiement :</h3>
        <hr className="second" />
        <div className="choice-paiement">
          <div className="visa" onClick={() => setReglementation("Visa")}>
            <input type="checkbox" />
            <img src="./src/assets/images/visa-icon.svg" alt="#" />
          </div>
          <div className="paypal" onClick={() => setReglementation("Paypal")}>
            <input type="checkbox" />
            <img src="./src/assets/images/paypal-icon.svg" alt="#" />
          </div>
        </div>
        <hr className="second" />
        <div className="total-paiement">
          <p>Prix total :</p>
          <p>{total.toFixed(2)} €</p>
        </div>
        <ButtonEvent
          onClick={() => {
            validate_cart();
          }}
        >
          {loader === "pending" ? <IsLoading /> : "Valider votre panier"}
        </ButtonEvent>
      </div>
      {error !== "" && (
        <Popup message={error}>
          <ButtonEvent onClick={() => setError("")}>OK</ButtonEvent>
        </Popup>
      )}
      {paiement && (
        <Elements stripe={stripePromise}>
          <PaiementForm setState={setPaiement} />
        </Elements>
      )}
    </section>
  );
};

export default Paiement;
