export const delayDebounceFn = (searchTerm, data, setState) => {
  setTimeout(() => {
    if (searchTerm != "") {
      const filteredData = data.filter((item) => item.nom.toLowerCase().includes(searchTerm.searchbar.toLowerCase()));
      setState(filteredData);
    }
  }, 650);
  return () => clearTimeout(delayDebounceFn);
};

export const filterPer = (attribut, state, setState) => {
  const data = state.slice();
  switch (attribut) {
    case "Trier par : Nom A-Z":
      setState(data.sort((a, b) => a.nom.localeCompare(b.nom)));
      break;
    case "Trier par : Nom Z-A":
      setState(data.sort((a, b) => b.nom.localeCompare(a.nom)));
      break;
    case "Trier par : Prix croissant":
      setState(data.sort((a, b) => a.prix[0] - b.prix[0]));
      break;
    case "Trier par : Prix décroissant":
      setState(data.sort((a, b) => b.prix[0] - a.prix[0]));
      break;
  }
};
