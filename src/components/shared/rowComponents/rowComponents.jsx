import { useState } from "react";

import { set_view } from "@services/item.service";

// Input de formulaire, handleChange pour renvoyer la value vers un state :
export const InputForm = ({ name, setState, state, placeholder }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return <input type="text" name={name} onChange={handleChange} placeholder={placeholder} required />;
};

// Input de formulaire pour mot de passe, handleChange pour renvoyer la value vers un state :
export const InputPassword = ({ name, setState, state, placeholder }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return <input type="password" name={name} onChange={handleChange} placeholder={placeholder} required />;
};

// Button de formulaire, type button :
export const ButtonEvent = ({ name, onClick, children }) => {
  return (
    <button type="button" name={name} onClick={onClick}>
      {children}
    </button>
  );
};

export const ButtonNavigation = ({ name, onClick, children, img }) => {
  return (
    <button type="button" name={name} onClick={onClick}>
      {children}
      <img src={img} />
    </button>
  );
};

// Button de formulaire, type button :
export const ButtonSubmit = ({ children }) => {
  return <button type="submit">{children}</button>;
};

export const Select = ({ children, func, setState, state, name }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "Chosissez une option") {
      setState && setState({ ...state, [name]: value });
    }
  };

  const MultipleFunc = (event) => {
    handleChange(event);
    func && func(event);
  };

  return (
    <div className="selection">
      <label>{name}</label>
      <select onChange={(e) => MultipleFunc(e)} required>
        <option value="" hidden>
          Chosissez une option
        </option>
        {children}
      </select>
    </div>
  );
};

// Bloc des liens vers les réseaux sociaux :
export const SocialMediaRow = () => {
  return (
    <div className="social_container">
      <ul>
        <a href="https://www.instagram.com/" className="instagram_link">
          <img src="./src/images/instagram-icon.svg" alt="instagram-icon" />
        </a>
        <a href="https://www.facebook.com/?locale=fr_FR" className="facebook_link">
          <img src="./src/images/facebook-icon.svg" alt="facebook-icon" />
        </a>
        <a href="https://twitter.com" className="twitter_link">
          <img src="./src/images/twitter-icon.svg" alt="twitter-icon" />
        </a>
      </ul>
    </div>
  );
};

export const CheckBox = ({ label, name, setState, state }) => {
  const handleCheckBoxChange = (event) => {
    const checked = event.target.checked;
    setState && setState({ ...state, [name]: checked });
  };

  return (
    <div className="checkbox">
      <input type="checkbox" name={name} onChange={handleCheckBoxChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export const CloseButtonItemCard = ({ close }) => {
  return (
    <button onClick={() => close(set_view(null))}>
      <div className="closeLine_1"></div>
      <div className="closeLine_2"></div>
    </button>
  );
};

export const SearchBar = ({ state, setState }) => {
  return (
    <>
      <InputForm name="searchbar" state={state} setState={setState} placeholder="Rechercher..." />
      <img className="search_icon_svg" src="./src/images/searchIcon.svg" alt="" />
    </>
  );
};
