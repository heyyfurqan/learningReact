import ListGroup from "./components/ListGroup";

export default function App() {

  
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

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}