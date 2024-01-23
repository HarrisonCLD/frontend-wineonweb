import { useEffect, useState } from "react";

import { VSmallCard } from "@components/item/smallcard";

export default function NewsItems({ data, active }) {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    setNewsItems(data.slice(0, 15));
  }, [data]);

  return (
    <section className={active ? "news wait" : "news"}>
      <h2>Nouveaux arrivages</h2>
      <div className="items_scroll">
        {newsItems.map((item, i) => (
          <VSmallCard key={i} img={`./src/assets/images/${item.image}`} nom={item.nom} />
        ))}
      </div>
    </section>
  );
}
