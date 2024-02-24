import React from "react";
import { useSelector } from "react-redux";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Paiement = () => {
  const stripePromise = loadStripe("pk_test_51OfIilANuq6Fnnmq4A3MbPWlv1dfOZJah9CHf9qX0oXGh7vna9bePEOeAGaFBaj4CVRjwyBAqQD5mtaSckaVdNAg00hpwGCy8V");
  const cart = useSelector((state) => state.Cart.items);

  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
  };

  const PaiementForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);
      console.log("card", cardElement);
      console.log("stripe", stripe);
    };

    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    );
  };

  return (
    <section className="paiement">
      <div className="cartlist">
        <p>Panier</p>
        <ul>{cart && cart.map((item) => <li key={item.id}>{item.nom}</li>)}</ul>
      </div>
      <div className="configPaiement">
        <Elements stripe={stripePromise}>
          <PaiementForm />
        </Elements>
      </div>
    </section>
  );
};

export default Paiement;
