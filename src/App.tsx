import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {

  return (
    <div>
      <Alert>
        Ayo Nigga <h3>What you doin' today?</h3>
      </Alert>
      <Button color="danger" onClick={() => console.log('Clicked')}>
        Click Meee!
      </Button>
    </div>
  );
}