import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { InputForm, SelectBox, ButtonEvent, InputDate } from "@rowComponents";
import AuthentificationBox from "@messagebox/authentificationbox";

import { set_status } from "@services/user.service";

import { set_newuser } from "@helpers/api/user.api.helper";

import { useData } from "../../../../providers/data.provider";

import { pattern } from "@helpers/pattern/pattern.bank";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formdata } = useData();

  const loading = useSelector((state) => state.User.status);
  const [formData, setFormData] = useState({});

  const set_signup = async () => {
    await dispatch(set_status("pending"));
    await set_newuser(formData);
  };

  return (
    <div className="authentification">
      {loading.status && <AuthentificationBox setStatus={loading} />}
      <form className="signup">
        <div className="top">
          <h3>Inscription</h3>
        </div>
        <div className="bot">
          <div className="left">
            <SelectBox className="civilite" name={"civilite"} data={formdata.civilite} setState={setFormData} index={0} />
            <InputForm name="nom" placeholder="Nom" state={formData} setState={setFormData} />
            <InputForm name="prenom" placeholder="Prénom" state={formData} setState={setFormData} />
            <InputForm name="email" placeholder="Votre email" state={formData} setState={setFormData} />
            <InputForm name="password" placeholder="Votre mot de passe" state={formData} setState={setFormData} />
            <InputForm name="code_postal" placeholder="Votre code postal" state={formData} setState={setFormData} />
            <InputDate name="date_de_naissance" placeholder="Date de naissance" state={formData} setState={setFormData} />
          </div>
          <div className="right">
            <InputForm name="adresse" placeholder="Votre adresse" state={formData} setState={setFormData} />
            <InputForm name="ville" placeholder="Votre ville" state={formData} setState={setFormData} />
            <InputForm name="code_postal" placeholder="Votre code postal" state={formData} setState={setFormData} />
            <SelectBox name={"pays"} data={formdata.pays} setState={setFormData} index={1} />
            <InputForm
              name="telephone"
              placeholder="Votre n° de téléphone"
              state={formData}
              setState={setFormData}
              pattern={pattern.telephone}
              error={"Ex. 0618278340"}
            />
          </div>
        </div>
        <div className="action">
          <ButtonEvent children={<p>S'inscrire</p>} onClick={() => set_signup()} />
          <p>
            Vous possédez déjà un compte ?<a onClick={() => navigate("/signin")}>se connecter</a>
          </p>
        </div>
      </form>
      <img className="login-page-image1" src="./src/assets/png/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 1" />
      <img className="login-page-image2" src="./src/assets/png/Gerald-G-Simple-Fruit-FF-Menu-6.png" alt="Login image 2" />
    </div>
  );
}
