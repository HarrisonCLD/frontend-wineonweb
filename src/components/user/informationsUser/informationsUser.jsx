import { useData } from "../../../providers/data.provider";

export default function InformationsUser() {
  const { informations } = useData();

  return (
    <section className="user">
      <h3>Informations :</h3>
      <div className="civilite">
        <p>
          Bonjour, {informations.civilite} {informations.nom} {informations.prenom} !
        </p>
      </div>
      <div className="personel">
        <div className="naissance">
          <span>Date de naissance :</span>
          <p>{informations.date_naissance}</p>
          <span>N° de telephone :</span>
          <p>{informations.telephone}</p>
        </div>
        <div className="address">
          <span>Adresse :</span>
          <p>{informations.adresse}</p>
        </div>
        <div className="location">
          <span>Code Postal :</span>
          <p>{informations.code_postal}</p>
          <span>Ville :</span>
          <p>{informations.ville}</p>
          <span>Pays :</span>
          <p>{informations.pays}</p>
        </div>
      </div>
      <div className="status">
        <span>Statut :</span>
        <p>{informations.status}</p>
      </div>
      <div className="commande">
        <h4>Dernières Commandes :</h4>
        <div className="content"></div>
      </div>
    </section>
  );
}
