import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarBackoffice from "@components/shared/navbarBackoffice";
import InformationsUser from "@components/user/informationsUser";
import AddFournisseur from "@components/stock/addFournisseur";
import AddItem from "@components/stock/addItem";
import ListeStock from "@components/stock/listStock";
import SettingsItem from "@components/stock/settingsItem";
import Commande from "@components/paiement/commande";

import { get_user } from "@helpers/api/user.api.helper";
import { get_dataform } from "@helpers/api/dataform.api.helper";

export default function BackOffice() {
  const dispatch = useDispatch();
  const [dataform, setDataform] = useState([]);
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.User.user);

  useEffect(() => {
    get_user(dispatch, token);
    get_dataform(setDataform);
  }, []);

  return (
    <>
      <NavbarBackoffice authorization={user} />
      <Routes>
        <Route path="/back/item" element={<AddItem authorization={user} data={dataform} />} />
        <Route path="/back/liststock" element={<ListeStock authorization={user} data={dataform} />} />
        <Route path="/back/fournisseur" element={<AddFournisseur authorization={user} data={dataform} />} />
        <Route path="/back/settings" element={<SettingsItem authorization={user} data={dataform} />} />
        <Route path="/commande" element={<Commande authorization={user} />} />
        <Route path="/info" element={<InformationsUser informations={user} />} />
      </Routes>
    </>
  );
}
