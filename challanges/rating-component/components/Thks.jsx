import React from "react";
import thksImg from "../assets/images/thksImg.svg";

function Thks({ rating }) {
  return (
    <div className="grid justify-items-center gap-5 w-[25rem] p-8 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
      <img src={thksImg} alt="" />
      <p className="bg-gray-700 rounded-full text-orange-500 font-semibold px-4 py-2">
        Has seleccionado {rating} de 5
      </p>
      <p className="text-white font-bold text-2xl">Muchas Gracias!</p>
      <div className="text-center text-gray-500">
        <p>
          Apreciamos que te hayas tomado el tiempo para darnos una devolución.
        </p>
        <p>Si necesitas ayuda en algo más, no dudes en ponerte en contacto</p>
      </div>
    </div>
  );
}

export default Thks;
