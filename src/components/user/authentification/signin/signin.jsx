import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { InputForm, InputPassword, ButtonEvent } from "@rowComponents";
import AuthentificationBox from "@messagebox/authentificationbox";

import { set_status } from "@services/user.service";

import { navigateTo } from "@helpers/navigation.helper";

import { check_authentification } from "@helpers/api/user.api.helper";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.User.status);
  const [formData, setFormData] = useState({});

  const set_signin = async () => {
    await dispatch(set_status("pending"));
    await check_authentification(dispatch, navigate, formData);
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
