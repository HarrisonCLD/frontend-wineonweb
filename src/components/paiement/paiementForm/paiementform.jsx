import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function PaiementForm({ setState }) {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment("{{CLIENT_SECRET}}", {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Paiement confirmé avec succès !");
    }
  };

  const options = {
    theme: "stripe",
    labels: "floating",
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#d1484d",
        color: "#00000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "18px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#00000",
        },
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE",
      },
    },
  };

  return (
    <div className="paiement-form">
      <div className="bg" onClick={() => setState(false)}></div>
      <form onSubmit={handleSubmit}>
        <div className="order-number">
          <h4>Informations de la carte bancaire</h4>
          <div className="name-card">
            <label htmlFor="name-card">Nom du titulaire</label>
            <input type="text" placeholder="Nom du titulaire" />
          </div>
          <div className="address-order">
            <label htmlFor="address-order">Adresse de livraison</label>
            <input type="text" placeholder="Adresse de livraison" />
            <input type="text" placeholder="Ville" />
          </div>
          <div className="number">
            <label htmlFor="number-cart">Informations bancaire</label>
            <div className="elements">
              <CardElement options={options} />
            </div>
          </div>
          <button type="submit" disabled={!stripe}>
            Payer
          </button>
        </div>
      </form>
    </div>
  );
}
