import { useDispatch } from "react-redux";
import { ButtonEvent } from "@rowComponents";

import { set_age } from "@services/access.service";

export default function ConfirmAge({ setState }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-age"></div>
      <section className="confirm-age">
        <div className="top">
          <h4>Bienvenue sur WineOnWeb,</h4>
          <h5>votre destination en ligne pour l'achat d'alcools de qualité.</h5>
          <p>
            Nous sommes tenus par la loi de vous informer que la vente d'alcool est réservée aux
            personnes âgées de <strong>18 ans et plus.</strong>
          </p>
          <span>
            Veuillez confirmer que vous avez l'âge légal en cliquant sur le bouton ci-dessous :
          </span>
        </div>
        <div className="warning">
          <p>
            <strong>Si vous avez moins de 18 ans</strong>, nous regrettons de vous informer que vous
            ne pouvez pas accéder à notre site. La consommation d'alcool est réservée aux adultes
            responsables. WineOnWeb encourage une consommation responsable.
          </p>
          <p>Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
          <p>Merci de votre compréhension et profitez de votre visite sur WineOnWeb.</p>
        </div>
        <div className="bot">
          <ButtonEvent
            onClick={() => {
              setState(false);
              dispatch(set_age({ code: 0, status: "refused" }));
            }}
          >
            Quitter
          </ButtonEvent>
          <ButtonEvent
            onClick={() => {
              setState(false);
              dispatch(set_age({ code: 1, status: "valid" }));
            }}
          >
            Valider
          </ButtonEvent>
        </div>
      </section>
    </>
  );
}
