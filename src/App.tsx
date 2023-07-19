import Like from './components/Like';

import './App.css'

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
      <Like onClick={() => console.log('huehue')}/>
    </div>
  );
}