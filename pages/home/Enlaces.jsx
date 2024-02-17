import React from "react";
import { Link } from "react-router-dom";
import homeData from "./homeData.json";

function Enlaces() {
  const desafio = homeData.desafio;

  const enlaces = desafio.map((data) => (
    <Link to={data.to}>
      <div>
        <img src={data.img} alt={`Screenshot de ${data.nombre}`} />
        <h2>{data.nombre}</h2>
      </div>
    </Link>
  ));

  return <section>{enlaces}</section>;
}

export default Enlaces;
