import React from "react";
import RatingForm from "./components/RatingForm";
import { useState } from "react";
import Thks from "./components/Thks";

function RatingApp() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const handleRating = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {submitted ? (
        <Thks rating={rating} />
      ) : (
        <RatingForm onSubmit={handleSubmit} onRatingChange={handleRating} />
      )}
    </div>
  );
}

export default RatingApp;
