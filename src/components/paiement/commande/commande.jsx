import { useEffect, useState } from "react";
import { get_order } from "../../shared/helpers/api/paiement.api.helper";

export default function Commande() {
  const [commande, setCommmande] = useState([]);

  useEffect(() => {
    const order = get_order();
    order.then((res) => {
      setCommmande(res);
    });
  }, []);

  return (
    <div className="order-user">
      <h4>Vos dernières commandes</h4>
      <hr />
      {commande.length > 0 ? (
        <ul>
          {commande.map((row, index) => {
            return (
              <li key={index}>
                <div className="top">
                  <div className="num-order">
                    <p>Numéro de commande</p>
                    <p>{row.numero_commande}</p>
                  </div>
                  <div className="date-order">
                    <p>Date de la commande</p>
                    <p>{row.date_commande}</p>
                  </div>
                </div>
                <div className="middle">
                  <ul>
                    {row.produit.map((line, index) => {
                      return (
                        <li key={index}>
                          <div>
                            <span>Nom du produit</span>
                            <span>Quantité</span>
                          </div>
                          <div>
                            <p>{line.nom}</p>
                            <p>{line.qte}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bot">
                  <div className="price-order">
                    <p>Prix</p>
                    <p>{row.prix_commande} €</p>
                  </div>
                  <div className="payment-order">
                    <p>Moyen de paiement</p>
                    <p>{row.mode_reglement}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Aucune commande disponible</p>
      )}
    </div>
  );
}
