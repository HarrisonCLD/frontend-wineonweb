import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import PresentationShop from "@components/item/presentation";
import NewsItems from "@components/item/news/new";
import GridItems from "@components/item/grid";
import Footer from "@components/shared/footer";

import { useData } from "../../../providers/data.provider";

export default function Shop() {
  const { items } = useData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(items.slice());
  }, [items]);

  return (
    <>
      <Outlet />
      <PresentationShop data={product} />
      <NewsItems data={product} />
      <GridItems data={product} />
      <Footer />
    </>
  );
}
