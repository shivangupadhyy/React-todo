import React, { useState } from "react";
import datas from "./Datas.json";

const Data = () => {
  const [nData, setnData] = useState(datas);

  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };
  const handleUpdate = (itemId) => {
    setnData(
      nData.map((items) => {
        if (items.id === itemId) {
          return { name: "newName" };
        } else {
          return items;
        }
      })
    );
  };
W
  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleUpdate(items.id)}>Update</button>
            <button onClick={() => handleRemove(items.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setnData([])}>Clear</button>
      </div>
    </div>
  );
};

export default Data;
