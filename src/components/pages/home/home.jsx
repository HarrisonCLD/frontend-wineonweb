import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import PresentationShop from "@components/item/presentation";
import NewsItems from "@components/item/news/new";
import GridItems from "@components/item/grid";
import Footer from "@components/shared/footer";
import ItemCard from "@components/item/card";
import IsLoading from "@messagebox/loadingbox";
import Cart from "@components/paiement/cart/cart";

import { get_items } from "@helpers/api/item.api.helper";

export default function Home() {
  const [items, setItems] = useState([]);
  const loading = useSelector((state) => state.Item.status);
  const view = useSelector((state) => state.Item.view);
  const cart = useSelector((state) => state.Cart.show);

  useEffect(() => {
    get_items(setItems);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, [items]);

  return (
    <main className="home">
      {cart && <Cart />}
      {view && <ItemCard id={view} data={items} active={view} />}
      <PresentationShop active={view} />
      {loading ? (
        <IsLoading status={"En attente des produits"} />
      ) : (
        <>
          <NewsItems data={items} active={view} />
          <GridItems data={items} active={view} />
        </>
      )}
      <Footer />
    </main>
  );
}
