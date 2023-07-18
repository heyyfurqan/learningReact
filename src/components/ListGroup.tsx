import { useState } from "react";

export default function ListGroup() {
  let items = [
    "New York",
    "Rio De Janeiro",
    "Tokyo",
    "Berlin",
    "Nairobi",
    "Helsinki",
    "Oslo",
    "Moscow",
  ];

  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <>
      <h1>Cities</h1>
      {items.length === 0 && (
        <>
          <p>No cities found</p>
        </>
      )}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {setSelectedIndex(index)}}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
