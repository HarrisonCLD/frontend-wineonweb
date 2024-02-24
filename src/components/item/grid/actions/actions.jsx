import { useState } from "react";

import { Flags, SearchBar, ButtonEvent, FilterBox } from "@rowComponents";

export default function Actions({ term, setTerm, chips, setChips }) {
  const sortPer = ["Trier par : Nom A-Z", "Trier par : Nom Z-A", "Trier par : Prix croissant", "Trier par : Prix décroissant"];

  return (
    <div className="options">
      <div className="actions">
        <SearchBar state={term} setState={setTerm} />
        <hr />
        {chips.length > 0 && chips.map((icon) => <Flags key={icon} content={icon} />)}
      </div>
      <div className="sort">
        <ButtonEvent>Filtres</ButtonEvent>
        <FilterBox options={sortPer} setState={setChips} />
      </div>
    </div>
  );
}
