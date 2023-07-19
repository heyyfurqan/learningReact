import { useState } from "react";
import './ListGroup.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {

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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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
