import { useNavigate } from "react-router-dom";

import { navigateTo } from "@helpers/navigation.helper";
import { useEffect } from "react";

export default function NavbarBackoffice({ authorization }) {
  const navigate = useNavigate();
  const role = authorization?.id_role?.id;

  return (
    <nav className="navbackoffice">
      <ul>
        <li>
          <a onClick={() => navigateTo(navigate, "/personal/info")}>Informations</a>
        </li>
        <li>
          <a onClick={() => navigateTo(navigate, "/personal/commande")}>Commande</a>
        </li>
        {role === 1 && (
          <>
            <li>
              <a onClick={() => navigateTo(navigate, "/personal/back/item")}>Item</a>
            </li>
            <li>
              <a onClick={() => navigateTo(navigate, "/personal/back/settings")}>Paramètre produit</a>
            </li>
            <li>
              <a onClick={() => navigateTo(navigate, "/personal/back/fournisseur")}>Fournisseur</a>
            </li>
            <li>
              <a onClick={() => navigateTo(navigate, "/personal/back/liststock")}>Liste Produits</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
