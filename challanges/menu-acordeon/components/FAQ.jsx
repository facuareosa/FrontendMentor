import React from "react";
import Acordeon from "./Acordeon";
import starImg from "../assets/images/icon-star.svg";


function FAQ() {
  return (
    <div className="bg-white p-7 w-[20rem] rounded-3xl md:w-[35rem]">
      <div className="flex items-center">
        <img src={starImg} alt="estrella" className="mr-3" />
        <h2 className="text-[3rem] font-bold">FAQs</h2>
      </div>
      <Acordeon
        pregunta="Quien soy?"
        respuesta="Mi nombre es Facundo Areosa, argentino viviendo en España hace aproximadamente un año."
      />
      <Acordeon
        pregunta="A que me dedico?"
        respuesta="Me estoy fomando como front-end developer."
      />
      <Acordeon
        pregunta="Que tecnologias uso?"
        respuesta="En mis ultimos proyectos estoy utilizando JavaScript, React, SASS, Tailwind y Bootstrap "
      />
    </div>
  );
}

export default FAQ;
