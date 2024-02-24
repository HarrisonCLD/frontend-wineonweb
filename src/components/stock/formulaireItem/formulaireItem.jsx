import { Await } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { useData } from "../../../providers/data.provider";

import { ButtonEvent } from "@rowComponents";

import IsLoading from "@messagebox/loadingbox";

import AddItem from "@components/stock/addItem";
import AddCategorie from "@components/stock/addCategorie";
import AddOptionAttribut from "@components/stock/addOptionAttribut";
import AddAttribut from "@components/stock/addAttribut";

export default function FormulaireItem() {
  const { formdata } = useData();
  const [loader, setLoader] = useState(true);

  const [navFormulaire, setNavFormulaire] = useState(1);

  useEffect(() => {
    if (Object.keys(formdata).length > 0) {
      setLoader(false);
    }
  }, []);

  const sidenav = (e) => {
    const target = e.currentTarget;
    const screenX = target.offsetLeft;
    const list = document.querySelectorAll(".switch ul li button");
    const selection = document.querySelector(".selection");
    const tabList = Array.from(list);
    tabList.map((row) => row.className === "on" && row.classList.remove("on"));
    target.classList.add("on");
    selection.style.transform = `translateX(${screenX}px)`;
  };

  return (
    <div className="formItem">
      <div className="options-data">
        <div className="switch">
          <ul>
            <li>
              <ButtonEvent
                className="on"
                onClick={(e) => {
                  setNavFormulaire(1);
                  sidenav(e);
                }}
              >
                Produit
              </ButtonEvent>
            </li>
            <li>
              <ButtonEvent
                onClick={(e) => {
                  setNavFormulaire(2);
                  sidenav(e);
                }}
              >
                Catégorie
              </ButtonEvent>
            </li>
            <li>
              <ButtonEvent
                onClick={(e) => {
                  setNavFormulaire(3);
                  sidenav(e);
                }}
              >
                Attribut
              </ButtonEvent>
            </li>
            <li>
              <ButtonEvent
                onClick={(e) => {
                  setNavFormulaire(4);
                  sidenav(e);
                }}
              >
                Option d'attribut
              </ButtonEvent>
            </li>
            <li className="selection"></li>
          </ul>
        </div>
      </div>
      {loader ? (
        <IsLoading />
      ) : (
        <>
          {navFormulaire === 1 ? <AddItem /> : null}
          {navFormulaire === 2 ? <AddCategorie /> : null}
          {navFormulaire === 3 ? <AddAttribut /> : null}
          {navFormulaire === 4 ? <AddOptionAttribut /> : null}
        </>
      )}
    </div>
  );
}
