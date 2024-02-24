import { useSelector } from "react-redux";

import { VSmallCard } from "@components/item/smallcard";
import { useData } from "../../../providers/data.provider";

export default function NewsItems() {
  const view = useSelector((state) => state.Item.view);
  const { items } = useData();

  return (
    <section className={view ? "news wait" : "news"}>
      <h2>Nouveaux arrivages</h2>
      <div className="items_scroll">
        {items.map((item, i) => (
          <VSmallCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
}
