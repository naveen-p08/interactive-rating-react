import "./App.css";
import Card from "./components/ui/Card";
import Rating from "./components/Rating";
import { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(undefined);

  return (
    <>
      <Card>
        <Rating handleClick={setRating} />
      </Card>
    </>
  );
}

export default App;
