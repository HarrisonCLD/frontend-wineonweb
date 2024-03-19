import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Await, useLoaderData, Outlet } from "react-router-dom";

import Navbar from "@components/shared/navbar/navbar";
import Cart from "@components/paiement/cart/cart";
import IsLoading from "@messagebox/loadingbox";
import ConfirmAge from "../../shared/messagebox/confirmAge/confirmage";

import { checktoken } from "@helpers/api/checktoken.api.helper";

import { useData } from "../../../providers/data.provider";
import CookiesAccept from "../../shared/messagebox/cookiesAccept/cookiesaccept";

export default function Home() {
  const { product, data } = useLoaderData();
  const { setItemsData, setFormData } = useData();

  const [confirmAge, setConfirmAge] = useState(true);
  const [confirmCookies, setConfirmCookies] = useState(true);
  const cart = useSelector((state) => state.Cart.show);

  useEffect(() => {
    setItemsData(product);
    setFormData(data);
  }, [product, data]);

  useEffect(() => {
    const access = JSON.parse(localStorage.getItem("ageLegal"));
    const cookies = JSON.parse(localStorage.getItem("cookies"));
    if (access && access.code === 1) {
      setConfirmAge(false);
    }
    if (cookies) {
      console.log(cookies);
      setConfirmCookies(false);
    }
  }, []);

  return (
    <>
      <main className="home">
        <Navbar />
        {confirmAge ? <ConfirmAge setState={setConfirmAge} /> : null}
        {confirmCookies ? <CookiesAccept setState={setConfirmCookies} /> : null}
        {cart && <Cart />}
        <Suspense fallback={<IsLoading />}>
          <Await resolve={(product, data)}>
            {() => <div className="content">{<Outlet />}</div>}
          </Await>
        </Suspense>
      </main>
    </>
  );
}
