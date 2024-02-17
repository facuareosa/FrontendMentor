import React from "react";
import { Link } from "react-router-dom";
import homeData from "./homeData.json";
import styles from "./Enlaces.module.css"

function Enlaces() {
  const desafio = homeData.desafio;

  const enlaces = desafio.map((data) => (
    <Link className={styles.link} to={data.to}>
      <div className={styles.links__container}>
        <img className={styles.links__img} src={data.img} alt={`Screenshot de ${data.nombre}`} />
        <h2 className={styles.links__title}>{data.nombre}</h2>
      </div>
    </Link>
  ));

  return enlaces;
}

export default Enlaces;
