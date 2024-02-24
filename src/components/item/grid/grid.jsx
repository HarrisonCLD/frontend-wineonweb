import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { SearchBar, ButtonEvent, Flags } from "@rowComponents";

import { SmallCard } from "@components/item/smallcard";

import { delayDebounceFn, filterPer } from "@helpers/grid.helper";
import Actions from "./actions";

export default function GridItems({ data }) {
  const view = useSelector((state) => state.Item.view);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState({ searchbar: "" });
  const [flags, setFlags] = useState(["Tier par : Nom A-Z"]);

  useEffect(() => {
    delayDebounceFn(searchTerm, data, setFilterData);
  }, [searchTerm, data]);

  useEffect(() => {
    filterData.length === 0 && setFilterData(data.slice());
  }, [data]);

  useEffect(() => {
    filterPer(flags[0], filterData, setFilterData);
  }, [flags]);

  return (
    <section className={view ? "grid wait" : "grid"}>
      <h3>Catalogue</h3>
      <hr />
      <Actions term={searchTerm} setTerm={setSearchTerm} chips={flags} setChips={setFlags} />
      <div className="list_item">
        {filterData.map((item, index) => (
          <SmallCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
