import { useState, useEffect } from "react";

import { useData } from "../../../providers/data.provider";

import IsLoading from "@messagebox/loadingbox";

export default function ListeStock() {
  const { items } = useData();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (Object.keys(items).length > 0) {
      setLoader(false);
    }
  }, []);

  return (
    <>
      {loader ? (
        <IsLoading />
      ) : (
        <div className="list_stock">
          <h3>Liste des produits en stock</h3>
          <table>
            <thead>
              <tr>{items.length > 0 && Object.keys(items[0]).map((key) => <th key={key}>{key}</th>)}</tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  {Object.entries(item).map(([key, value], index2) =>
                    key === "image" ? (
                      <td className={key} key={index2}>
                        <img src={`../src/assets/images/${value}`} alt="" />
                      </td>
                    ) : (
                      <td className={key} key={index2}>
                        {Array.isArray(value) ? value.join(", ") : value.nom || value}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
