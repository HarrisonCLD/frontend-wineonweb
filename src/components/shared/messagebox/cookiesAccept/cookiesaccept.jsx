import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { set_cookies } from "@services/access.service";

import { ButtonEvent } from "@rowComponents";

export default function CookiesAccept({ setState }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-cookies"></div>
      <div className="cookies-accept">
        <div className="top">
          <h4>Politique de confidentialité en rapport aux cookies</h4>
          <Link>Conditions d'utilisations</Link>
        </div>
        <p>Notre site utilise des cookies pour améliorer votre expérience de navigation.</p>
        <p>Veuillez sélectionner vos préférences en matière de cookies.</p>
        <p>
          - <strong>Cookies Essentiels</strong> Ces cookies sont nécessaires au fonctionnement du
          site et ne peuvent pas être désactivés. Ils incluent des cookies tels que ceux nécessaires
          à la sécurité du site et à la gestion de vos préférences en matière de cookies.
        </p>
        <p>
          - <strong>Cookies Analytiques</strong> Ces cookies nous aident à comprendre comment vous
          interagissez avec le site en collectant des informations de manière anonyme. Les données
          collectées nous permettent d'optimiser le site pour offrir une meilleure expérience
          utilisateur.
        </p>
        <p>
          - <strong>Cookies de Publicité</strong> Ces cookies sont utilisés par nos partenaires
          publicitaires pour diffuser des annonces qui correspondent à vos intérêts. Ils peuvent
          également être utilisés pour limiter le nombre de fois où vous voyez une annonce et
          mesurer l'efficacité de nos campagnes publicitaires.
        </p>
        <div className="bot">
          <ButtonEvent
            onClick={() => {
              setState(false);
              dispatch(set_cookies("essentials"));
            }}
          >
            Accepter seulement essentiels
          </ButtonEvent>
          <ButtonEvent
            onClick={() => {
              setState(false);
              dispatch(set_cookies("refused"));
            }}
          >
            Refuser
          </ButtonEvent>
          <ButtonEvent
            onClick={() => {
              setState(false);
              dispatch(set_cookies("accept"));
            }}
          >
            Accepter
          </ButtonEvent>
        </div>
      </div>
    </>
  );
}
