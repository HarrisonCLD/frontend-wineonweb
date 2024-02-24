import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { ButtonEvent } from "@rowComponents";

import { set_status } from "@services/user.service";
import { useData } from "../../../providers/data.provider";

export default function NavbarBackoffice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { informations } = useData();

  const disconect = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(set_status(""));
      navigate("/");
    } else {
      dispatch(set_status(""));
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="navbackoffice">
      <ul>
        <section className="section-user">
          <div className="top">
            <h4>Informations utilisateur</h4>
            <hr />
          </div>
          <li>
            <Link to={"/personal"}>Informations</Link>
          </li>
          <li>
            <Link to={"/personal/commande"}>Commandes</Link>
          </li>
        </section>
        {informations.role === 1 && (
          <section className="section-admin">
            <div className="top">
              <h4>Gestion administrateur</h4>
              <hr />
            </div>
            <li>
              <Link to={"/personal/produit"}>Gérer les produits</Link>
            </li>
            <li>
              <Link to={"/personal/stock"}>Liste des produits</Link>
            </li>
          </section>
        )}
        <li className="disconect">
          <ButtonEvent onClick={() => disconect()}>Déconexion</ButtonEvent>
        </li>
      </ul>
    </div>
  );
}
