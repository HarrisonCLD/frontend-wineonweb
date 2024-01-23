import { useNavigate } from "react-router-dom";

import { navigateTo } from "@helpers/navigation.helper";

export default function NavbarBackoffice() {
  const navigate = useNavigate();
  return (
    <nav className="navbackoffice">
      <ul>
        <li>
          <a
            onClick={() => {
              navigateTo(navigate, "/personal/back/item");
            }}>
            Item
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigateTo(navigate, "/personal/back/fournisseur");
            }}>
            Fournisseur
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigateTo(navigate, "/personal/back/liststock");
            }}>
            Liste Produits
          </a>
        </li>
      </ul>
    </nav>
  );
}
