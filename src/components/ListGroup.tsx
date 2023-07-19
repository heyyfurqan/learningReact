import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}

export default function ListGroup({items, heading}: Props) {

  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <>
      <h1>{heading}</h1>
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
