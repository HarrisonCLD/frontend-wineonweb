import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { InputForm, InputPassword, ButtonEvent } from "@rowComponents";
import AuthentificationBox from "@messagebox/authentificationbox";

import { navigateTo } from "@helpers/navigation.helper";

import { signin } from "@services/user.service";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState("");
  const [formData, setFormData] = useState({});

  const set_signin = async () => {
    setLoading("pending");
    await dispatch(signin(formData));
    setTimeout(() => {
      setLoading("success");
    }, 1000);
    setTimeout(() => {
      navigateTo(navigate, "/personal/info");
      setLoading(null);
    }, 2500);
  };

  return (
    <>
      {loading && <AuthentificationBox setStatus={loading} />}
      <form className="signin">
        <InputForm name="email" state={formData} setState={setFormData} placeholder="Email" />
        <InputPassword name="password" state={formData} setState={setFormData} placeholder="Mot de passe" />

        <img className="login-page-image1" src="src/images/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 1" />
        <img className="login-page-image2" src="src/images/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 2" />

        <ButtonEvent children={<p>Se connecter</p>} onClick={() => set_signin()} />

        <p>
          Vous ne possédez pas de compte ?<a onClick={() => navigateTo(navigate, "/signup")}>s'inscrire</a>
        </p>
      </form>
    </>
  );
}
