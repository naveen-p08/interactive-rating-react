import { useState } from "react";
import "./App.css";
import Card from "./components/ui/Card";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(undefined);
  const [ratingSubmit, setRatingSubmit] = useState(false);

  return (
    <>
      <Card>
        {ratingSubmit ? (
          <ThankYou rating={rating} />
        ) : (
          <Rating
            handleClick={setRating}
            handleSubmit={setRatingSubmit}
            rating={rating}
          />
        )}
      </Card>
    </>
  );
}

export default App;
