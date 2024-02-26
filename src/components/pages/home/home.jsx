import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Await, useLoaderData, Outlet } from "react-router-dom";

import Navbar from "@components/shared/navbar/navbar";
import Cart from "@components/paiement/cart/cart";
import IsLoading from "@messagebox/loadingbox";

import { checktoken } from "@helpers/api/checktoken.api.helper";

import { useData } from "../../../providers/data.provider";

export default function Home() {
  const { product, data } = useLoaderData();
  const { setItemsData, setFormData } = useData();
  const cart = useSelector((state) => state.Cart.show);

  useEffect(() => {
    setItemsData(product);
    setFormData(data);
  }, [product, data]);

  return (
    <>
      <main className="home">
        <Navbar />
        {cart && <Cart />}
        <Suspense fallback={<IsLoading />}>
          <Await resolve={(product, data)}>{() => <div className="content">{<Outlet />}</div>}</Await>
        </Suspense>
      </main>
    </>
  );
}
