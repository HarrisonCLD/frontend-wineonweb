import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { InputForm, InputPassword, ButtonEvent } from "@rowComponents";
import AuthentificationBox from "@messagebox/authentificationbox";

import { set_status } from "@services/user.service";

import { check_authentification } from "@helpers/api/user.api.helper";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.User.status);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const set_signin = async () => {
    dispatch(set_status({ status: "pending" }));
    await check_authentification(dispatch, formData, navigate);
  };

  useEffect(() => {
    if (formData.email.length < 2 || formData.password.length < 2) {
      dispatch(set_status({ status: "", message: "" }));
    }
  }, [formData]);
  return (
    <>
      {(loading.status === "pending" || loading.status === "success") && <AuthentificationBox state={loading} />}
      <div className="authentification">
        <form className="signin">
          <div className="top">
            <h3>Connexion</h3>
          </div>
          <div className={loading.status === "error" ? "bot invalid" : "bot"}>
            {loading.status === "error" && <p className="error">{loading.message}</p>}
            <InputForm name="email" state={formData} setState={setFormData} placeholder="Email" />
            <InputPassword name="password" state={formData} setState={setFormData} placeholder="Mot de passe" />

            <img className="login-page-image1" src="./src/assets/png/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 1" />
            <img className="login-page-image2" src="./src/assets/png/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 2" />

            <ButtonEvent children={<p>Se connecter</p>} onClick={() => set_signin()} />

            <p>
              Vous ne possédez pas de compte ?<Link to={"/signup"}>s'inscrire</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
