import { useState } from "react";

export default function ListeStock() {
  const [stock, setStock] = useState([]);

  return (
    <div className="list_stock">
      <table>
        <thead>
          <tr>
            {/* {stock.length > 0 &&
              Object.keys(stock[0]).map((key) => <th key={key}>{key}</th>)} */}
          </tr>
        </thead>
        <tbody>
          {/* {stock.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value], index2) =>
                key === "image" ? (
                  <td className={key} key={index2}>
                    <img src={`./src/images/${value}`} alt="" />
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
