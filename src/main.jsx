import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "@services/store.service";

import Navbar from "@components/shared/navbar";
import BackOffice from "@components/pages/backoffice/backoffice";
import Home from "@pages/home/home";
import SignIn from "@components/user/authentification/signin";
import SignUp from "@components/user/authentification/signup";

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/personal/*" element={<BackOffice />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
