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

  return (
    <>
      <h1>Cities</h1>
      {items.length === 0 && (
        <>
          <p>No cities found</p>
        </>
      )}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log("clicked!")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
