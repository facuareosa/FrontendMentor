import React from "react";
import RatingForm from "./components/RatingForm";
import { useState } from "react";
import Thks from "./components/Thks";
import ToHomeBtn from "../../pages/home/ToHomeBtn";

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

    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-900">
      {submitted ? (
        <Thks rating={rating} />
      ) : (
        <RatingForm onSubmit={handleSubmit} onRatingChange={handleRating} />
      )}
      <ToHomeBtn />
    </div>
  );
}

export default RatingApp;
