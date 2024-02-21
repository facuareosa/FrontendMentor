import React from "react";
import { useState } from "react";
import botonMas from "../assets/images/icon-plus.svg";
import botonMenos from "../assets/images/icon-minus.svg";

function Acordeon({ pregunta, respuesta }) {
  const [acordeonOpen, setAcordeonOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAcordeonOpen(!acordeonOpen)}
        className="flex justify-between items-center w-[100%] px-3 py-3 hover:text-violet-400 text-base font-bold"
      >
        <p>{pregunta}</p>
        {acordeonOpen ? (
          <img src={botonMenos} alt="boton menos" />
        ) : (
          <img src={botonMas} alt="boton mas" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out w-[100%] px-3 py-3 text-base ${
          acordeonOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">{respuesta}</p>
      </div>
    </div>
  );
}

export default Acordeon;
