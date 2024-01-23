import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import InformationsUser from "@components/user/informationsUser";
import AddFournisseur from "@components/stock/addFournisseur";
import AddItem from "@components/stock/addItem";
import ListeStock from "@components/stock/listStock";
import NavbarBackoffice from "@components/shared/navbarBackoffice";

export default function BackOffice() {
  return (
    <>
      <NavbarBackoffice />
      <Routes>
        <Route path="/back/item" element={<AddItem />} />
        <Route path="/back/liststock" element={<ListeStock />} />
        <Route path="/back/fournisseur" element={<AddFournisseur />} />
        <Route path="/info" element={<InformationsUser />} />
      </Routes>
    </>
  );
}
