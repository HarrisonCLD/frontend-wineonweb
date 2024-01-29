export const delayDebounceFn = (searchTerm, data, setState) => {
  setTimeout(() => {
    if (searchTerm != "") {
      const filteredData = data.filter((item) => item.nom.toLowerCase().includes(searchTerm.searchbar.toLowerCase()));
      setState(filteredData);
    }
  }, 650);
  return () => clearTimeout(delayDebounceFn);
};
