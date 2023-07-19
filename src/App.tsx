import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import { PropsWithChildren } from "react";

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
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  );
}