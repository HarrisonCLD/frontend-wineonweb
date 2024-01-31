import { useState } from "react";

export default function InformationsUser({ informations }) {
  return (
    <section className="user">
      <h3>Informations :</h3>
      <p>{informations.civilite}</p>
      <p>
        {informations.nom} {informations.prenom}
      </p>
      <span>Date de naissance :</span>
      <p></p>
      <hr />
      <span>Adresse :</span>
      <p>{informations.adresse}</p>
      <hr />
      <span>Code Postal :</span>
      <p>{informations.code_postal}</p>
      <hr />
      <span>Ville :</span>
      <p>{informations.ville}</p>
      <hr />
      <span>Dernières Commandes :</span>
      <p>{informations.ville}</p>
      <hr />
    </section>
  );
}
