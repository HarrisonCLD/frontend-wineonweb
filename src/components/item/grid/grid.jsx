import { useEffect, useState } from "react";

import { SearchBar } from "@rowComponents";

import { SmallCard } from "@components/item/smallcard";

export default function GridItems({ data, active }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className={active ? "grid wait" : "grid"}>
      <h3>Catalogue</h3>
      <hr />
      <div className="options">
        <SearchBar state={searchTerm} setState={setSearchTerm} />
      </div>
      <div className="list_item">
        {data.map((item, index) => (
          <SmallCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
