import { createContext, useContext, useEffect, useState } from "react";
import { DownloadData } from "./helpers/downloaddata";

import { get_items } from "@helpers/api/item.api.helper";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formdata, setFormdata] = useState({});
  const [items, setItems] = useState([]);
  const [informations, setInformations] = useState([]);

  const setInformationsData = (data) => {
    setInformations(data);
  };

  const setItemsData = (data) => {
    setItems(data);
  };

  const setFormData = (data) => {
    setFormdata(data);
  };

  const get_dataform = () => {
    const dataform = DownloadData(informations.role, setFormdata);
    const stock = get_items();
    dataform.then((res) => setFormdata(res));
    stock.then((res) => setItemsData(res));
  };

  useEffect(() => {
    if (informations) {
      informations.role === 1 && get_dataform();
    }
  }, [informations]);

  return (
    <DataContext.Provider value={{ items, setItemsData, formdata, informations, setInformationsData, setFormData, get_dataform }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
