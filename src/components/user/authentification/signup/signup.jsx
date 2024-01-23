import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { InputForm, Select, ButtonEvent } from "@rowComponents";
import AuthentificationBox from "@messagebox/authentificationbox";

import { navigateTo } from "@helpers/navigation.helper";

import { signup } from "@services/user.service";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState("");
  const [formData, setFormData] = useState({});

  const set_signup = async () => {
    console.log("ici");
    setLoading("pending");
    console.log(formData);
    await dispatch(signup(formData));
    setTimeout(() => {
      setLoading("success");
    }, 1000);
    setTimeout(() => {
      navigateTo(navigate, "/");
      setLoading(null);
    }, 2500);
  };

  return (
    <>
      {loading && <AuthentificationBox setStatus={loading} />}
      <form className="signup">
        <Select name="civilite" placeholder="Nom" state={formData} setState={setFormData}></Select>
        <InputForm name="nom" placeholder="Nom" state={formData} setState={setFormData} />
        <InputForm name="prenom" placeholder="Prénom" state={formData} setState={setFormData} />
        <InputForm name="adresse" placeholder="Votre adresse" state={formData} setState={setFormData} />
        <Select name="region" state={formData} setState={setFormData}></Select>
        <Select name="pays" state={formData} setState={setFormData}></Select>
        <InputForm name="ville" placeholder="Votre ville" state={formData} setState={setFormData} />
        <InputForm name="code_postal" placeholder="Votre code postal" state={formData} setState={setFormData} />
        <InputForm name="telephone" placeholder="Votre n° de téléphone" state={formData} setState={setFormData} />

        <ButtonEvent children={<p>S'inscrire</p>} onClick={() => set_signup()} />

        <p>
          Vous possédez déjà un compte ?<a onClick={() => navigateTo(navigate, "/signin")}>se connecter</a>
        </p>
      </form>
    </>
  );
}
