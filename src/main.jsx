import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "@services/store.service";

// PROVIDER
import { DataProvider } from "./providers/data.provider";

import Home from "@pages/home/home";
import BackOffice from "@components/pages/backoffice/backoffice";
import Shop from "./components/item/shop/shop";
import SignIn from "@components/user/authentification/signin";
import SignUp from "@components/user/authentification/signup";
import Paiement from "@components/pages/paiement/paiement";
import ItemCard from "./components/item/card/card";

// BACKOFFICE
import InformationsUser from "@components/user/informationsUser";
import ListeStock from "@components/stock/listStock";
import AddFournisseur from "@components/stock/addFournisseur";
import AddItem from "@components/stock/addItem";
import Commande from "@components/paiement/commande";
import FormulaireItem from "@components/stock/formulaireItem";
import AddCategorie from "@components/stock/addCategorie";
import AddOptionAttribut from "@components/stock/addOptionAttribut";
import AddAttribut from "@components/stock/addAttribut";

import { get_user } from "@helpers/api/user.api.helper";
import { get_dataform } from "@helpers/api/dataform.api.helper";
import { get_items } from "@helpers/api/item.api.helper";
import { get_data_signup } from "@helpers/api/dataform.api.helper";

const router = createBrowserRouter([
  {
    path: "/personal",
    element: <BackOffice />,
    loader: async () => {
      let informations = await get_user();
      return defer({ informations });
    },
    children: [
      {
        path: "",
        element: <InformationsUser />,
      },
      {
        path: "stock",
        element: <ListeStock />,
      },
      {
        path: "produit",
        element: <FormulaireItem />,
      },
      {
        path: "commande",
        element: <Commande />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
    loader: () => {
      let product = get_items();
      let data = get_data_signup();
      return defer({ product, data });
    },
    children: [
      {
        path: "",
        element: <Shop />,
        children: [
          {
            path: ":id",
            element: <ItemCard />,
          },
        ],
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "paiement",
        element: <Paiement />,
      },
    ],
  },
]);

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </Provider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
