import { useEffect, useState } from "react";

import { get_items_stock } from "@helpers/api/item.api.helper";

export default function ListeStock({ user }) {
  const token = localStorage.getItem("token");
  const [stock, setStock] = useState([]);

  useEffect(() => {
    get_items_stock(setStock, token);
  }, []);

  return (
    <div className="list_stock">
      <table>
        <thead>
          <tr>
            {stock.length > 0 &&
              Object.keys(stock[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value], index2) =>
                key === "image" ? (
                  <td className={key} key={index2}>
                    <img src={`../../src/assets/images/${value}`} alt="" />
                  </td>
                ) : (
                  <td className={key} key={index2}>
                    {Array.isArray(value)
                      ? value.join(", ")
                      : value.nom || value}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
