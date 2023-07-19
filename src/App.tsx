import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisible(false)}>
        Ayo Nigga <h3>What you doin' today?</h3>
      </Alert>}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Click Meee!
      </Button>
    </div>
  );
}