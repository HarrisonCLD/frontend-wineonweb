export default function PresentationShop({ active }) {
  return (
    <>
      <section className={active ? "presentation wait" : "presentation"}>
        <div className="page_accueil_column1">
          <h1>Découvrez nos vins</h1>
          <p>A travers notre catalogue contenant mille références, vous voyagerez à travers le monde et découvrirez de nouvelles saveurs</p>
        </div>
        <div className="page_accueil_column2">
          <h2>FLEURIE DOMAINE PASSOT 2019</h2>
          <p>
            Le Domaine Passot est un petit domaine familial de 11 hectares réparti sur 4 crus du Beaujolais ainsi qu’un vin blanc issu du célèbre
            cépage Viognier. Dominique et Rémy sont issus de vieilles familles vigneronnes et ont à cœur de produire des vins authentiques.
          </p>
          <span>
            9,80€
            <button>Ajouter au panier</button>
          </span>
        </div>
        <img className="page_accueil_bottle_img" src="./src/assets/images/wine-bottle2.png" />
        <img className="page_accueil_bg_img" src="./src/assets/images/grape.png" />
      </section>
    </>
  );
}
