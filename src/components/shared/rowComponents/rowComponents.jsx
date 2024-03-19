import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { set_view } from "@services/item.service";
import { modifyQte } from "@services/cart.service";
import { useDispatch } from "react-redux";

// Input de formulaire, handleChange pour renvoyer la value vers un state :
export const InputForm = ({ name, setState, state, placeholder, pattern, error }) => {
  const [errPattern, setErrPattern] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrPattern(false);
    if (value != "") {
      if (pattern && !new RegExp(pattern).test(value)) {
        setErrPattern(true);
      }
      setState({ ...state, [name]: value });
    }
  };

  return (
    <div className="ipt">
      <input
        type="text"
        className={errPattern ? "error" : ""}
        name={name}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        pattern={pattern}
        required
      />
      {errPattern ? <p>{error}</p> : null}
    </div>
  );
};

// Input de formulaire pour mot de passe, handleChange pour renvoyer la value vers un state :
export const InputPassword = ({ name, setState, state, placeholder, pattern, error }) => {
  const [errPattern, setErrPattern] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrPattern(false);
    if (value != "") {
      if (pattern && !new RegExp(pattern).test(value)) {
        setErrPattern(true);
      }
      setState({ ...state, [name]: value });
    }
  };
  return (
    <div className="ipt">
      <input
        type="password"
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
      {errPattern ? <p>{error}</p> : null}
    </div>
  );
};

export const InputDate = ({ name, setState, state, placeholder }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="ipt">
      <input
        type="date"
        name={name}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

// Button de formulaire, type button :
export const ButtonEvent = ({ className, name, onClick, children }) => {
  return (
    <button type="button" className={className} name={name} onClick={onClick}>
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

export const SelectBox = ({ data, name, setState, index }) => {
  const [look, setLook] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState(data.slice());
  const [inputValue, setInputValue] = useState("");

  const delayDebounceFn = (searchTerm, data, setState) => {
    setTimeout(() => {
      if (searchTerm != "") {
        const filteredData = data.filter((item) =>
          item.nom.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setState(filteredData);
      } else {
        setFilter(data.slice());
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  };

  useEffect(() => {
    setFilter(data.slice());
  }, [data]);

  useEffect(() => {
    delayDebounceFn(inputValue, data, setFilter);
  }, [inputValue]);

  useEffect(() => {
    const elem = document.querySelectorAll(".select");
    const tab = Array.from(elem);
    document.addEventListener("click", function (event) {
      const outsideClick = !tab[index].contains(event.target);
      if (outsideClick) {
        setLook(false);
      }
    });
  }, []);

  return (
    <div className="select">
      <div className="top" onClick={() => setLook(!look)}>
        <input
          type="text"
          placeholder={name}
          value={selected !== null ? selected : inputValue}
          onChange={(e) => {
            setSelected(null);
            setInputValue(e.target.value);
          }}
        />
        <img src="http://localhost:5173/src/assets/images/arrow-select.svg" alt="arrow-select" />
      </div>
      <div className={`dropdown ${look ? "look" : ""}`}>
        <ul>
          {filter.map((row, i) => (
            <li
              key={i}
              name={name}
              onClick={() => {
                setLook(!look);
                setSelected(row.nom);
                setState((prev) => ({ ...prev, [name]: row.id }));
              }}
            >
              {row.nom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SelectCartQte = ({ defaultValue, data, item, setState, index }) => {
  const dispatch = useDispatch();
  const [look, setLook] = useState(false);
  const [selected, setSelected] = useState(item.quantite);
  const [filter, setFilter] = useState(data.slice());
  const [inputValue, setInputValue] = useState("");

  const delayDebounceFn = (searchTerm, data, setState) => {
    setTimeout(() => {
      if (searchTerm != "") {
        const filteredData = data.filter((item) =>
          item.nom.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setState(filteredData);
      } else {
        setFilter(data.slice());
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  };

  useEffect(() => {
    setFilter(data.slice());
  }, [data]);

  useEffect(() => {
    delayDebounceFn(inputValue, data, setFilter);
  }, [inputValue]);

  useEffect(() => {
    const elem = document.querySelectorAll(".select");
    const tab = Array.from(elem);
    document.addEventListener("click", function (event) {
      const outsideClick = !tab[index].contains(event.target);
      if (outsideClick) {
        setLook(false);
      }
    });
  }, []);

  return (
    <div className="select">
      <div className="top" onClick={() => setLook(!look)}>
        <input
          type="text"
          placeholder={defaultValue}
          value={selected !== null ? selected : defaultValue}
          onChange={(e) => {
            setSelected(null);
            setInputValue(e.target.value);
          }}
        />
        <img src="http://localhost:5173/src/assets/images/arrow-select.svg" alt="arrow-select" />
      </div>
      <div className={`dropdown ${look ? "look" : ""}`}>
        <ul>
          {filter.map((row, i) => (
            <li
              key={i}
              onClick={() => {
                setLook(!look);
                setSelected(row);
                dispatch(modifyQte({ id: item.id, qte: row }));
              }}
            >
              {row}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Select = ({ children, func, setState, state, content }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "Chosissez une option") {
      setState && setState({ ...state, [name]: value });
    }
  };

  const MultipleFunc = (event) => {
    handleChange(event);
    func && func();
  };

  return (
    <div className="selection">
      <select onChange={(e) => MultipleFunc(e)} required>
        <option value="" hidden>
          {content}
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
      <h4>
        Rejoignez-nous sur nos <br />
        <span>réseaux sociaux !</span> :
      </h4>
      <ul>
        <a href="https://www.instagram.com/" className="instagram_link">
          <img src="./src/assets/images/instagram-icon.svg" alt="instagram-icon" />
        </a>
        <a href="https://www.facebook.com/?locale=fr_FR" className="facebook_link">
          <img src="./src/assets/images/facebook-icon.svg" alt="facebook-icon" />
        </a>
        <a href="https://twitter.com" className="twitter_link">
          <img src="./src/assets/images/twitter-icon.svg" alt="twitter-icon" />
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

export const CloseButtonItemCard = (props) => {
  return (
    <Link
      className="close"
      to={props.path}
      onClick={() => {
        props.close(set_view(null));
      }}
    >
      <div className="closeLine_1"></div>
      <div className="closeLine_2"></div>
    </Link>
  );
};

export const CloseButtonImageGrid = ({ close }) => {
  return (
    <button onClick={() => close(null)} className="closeButtonGrid">
      <div className="closeLine_1"></div>
      <div className="closeLine_2"></div>
    </button>
  );
};

export const SupprButton = ({ state, setState }) => {
  const supprimer = () => {
    const newState = { ...state };
    newState.image && delete newState.image;
    setState(newState);
  };

  return (
    <button onClick={supprimer}>
      <div className="closeLine_1"></div>
      <div className="closeLine_2"></div>
    </button>
  );
};

export const SearchBar = ({ state, setState }) => {
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    state.searchbar === "" ? setSearchBar(false) : setSearchBar(true);
  }, [state]);

  const clearSearch = () => {
    setState({ searchbar: "" });
  };

  return (
    <div className="search">
      <InputForm name="searchbar" state={state} setState={setState} placeholder="Rechercher..." />
      {searchBar ? (
        <img
          onClick={clearSearch}
          className="clear"
          src="./src/assets/images/close-icon.svg"
          alt="#"
        />
      ) : (
        <img src="./src/assets/images/search-icon.svg" alt="#" />
      )}
    </div>
  );
};

export const FilterBox = ({ options, setState }) => {
  const [content, setContent] = useState(false);

  return (
    <div className="filterPer">
      <div>
        <button onClick={() => setContent(!content)}>Trier par</button>
      </div>
      <div className={content ? "content active" : "content"}>
        {options.map((option, i) => (
          <p
            key={i}
            onClick={() => {
              setState([options[i]]);
              setContent(false);
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export const Flags = ({ content }) => {
  return (
    <div className="flags">
      {/* <img src={`./src/assets/images/close-icon.svg`} alt={content} /> */}
      <p>{content}</p>
    </div>
  );
};
