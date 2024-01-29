import { useEffect, useState } from "react";

import { SearchBar } from "@rowComponents";

import { SmallCard } from "@components/item/smallcard";

import { delayDebounceFn } from "../../shared/helpers/grid.helper";

export default function GridItems({ data, active }) {
  const [filterData, setFilterData] = useState(data.slice());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    delayDebounceFn(searchTerm, data, setFilterData);
  }, [searchTerm, data]);

  return (
    <section className={active ? "grid wait" : "grid"}>
      <h3>Catalogue</h3>
      <hr />
      <div className="options">
        <SearchBar state={searchTerm} setState={setSearchTerm} />
      </div>
      <div className="list_item">
        {filterData.map((item, index) => (
          <SmallCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
