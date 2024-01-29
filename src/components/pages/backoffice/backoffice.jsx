import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InformationsUser from "@components/user/informationsUser";
import AddFournisseur from "@components/stock/addFournisseur";
import AddItem from "@components/stock/addItem";
import ListeStock from "@components/stock/listStock";
import NavbarBackoffice from "@components/shared/navbarBackoffice";

import { get_user } from "@helpers/api/user.api.helper";

export default function BackOffice() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.User.token);
  const user = useSelector((state) => state.User.user);

  useEffect(() => {
    get_user(dispatch, token);
  }, []);

  return (
    <>
      <NavbarBackoffice />
      <Routes>
        <Route path="/back/item" element={<AddItem profil={user} />} />
        <Route path="/back/liststock" element={<ListeStock profil={user} />} />
        <Route path="/back/fournisseur" element={<AddFournisseur profil={user} />} />
        <Route path="/info" element={<InformationsUser profil={user} />} />
      </Routes>
    </>
  );
}
