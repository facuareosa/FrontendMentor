import React from "react";
import starImg from "../assets/images/icon-star.svg";

function RatingForm({ onSubmit, onRatingChange }) {
  const handleRatingBtn = (rating) => {
    onRatingChange(rating);
  };

  const handleSubmitBtn = () => {
    onSubmit(true);
  };

  return (
    <div className="grid gap-4 w-[25rem] p-8 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
      <img
        className="bg-gray-700 p-3 rounded-full"
        src={starImg}
        alt="estrella"
      />
      <h2 className="text-white font-bold text-2xl">Como lo hicimos?</h2>
      <p className="text-gray-500">
        Por favor, dejanos saber que tal respondimos tu solicitud. Todo el
        feedback es apreciado y nos ayuda a mejorar nuestro servicio
      </p>
      <div className="flex justify-between ">
        {[1, 2, 3, 4, 5].map((btnNumber, index) => (
          <button
            onClick={() => handleRatingBtn(btnNumber)}
            className="bg-gray-700 w-14 h-14 rounded-full text-gray-500 font-bold flex items-center justify-center hover:bg-gray-400 focus:bg-orange-500 focus:text-white"
            key={index}
          >
            {btnNumber}
          </button>
        ))}
      </div>
      <button
        onClick={() => handleSubmitBtn()}
        className="bg-orange-500 w-[100%] py-2 rounded-full text-white font-bold"
      >
        Ok!
      </button>
    </div>
  );
}

export default RatingForm;
