export default function ListGroup() {
    const items = ['New York', 'Rio De Janeiro', 'Tokyo',
    'Berlin', 'Nairobi', 'Helsinki', 'Oslo', 'Moscow'];

  return (
    <>
      <h1>Cities</h1>
      <ul className="list-group">
        {items.map((item) => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}
