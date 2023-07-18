import { MouseEvent } from "react";

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

  const handleClick = (event: MouseEvent) => console.log(event);
  const selectedIndex = 2;

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
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
