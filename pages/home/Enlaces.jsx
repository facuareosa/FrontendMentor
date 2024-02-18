import React from "react";
import { Link } from "react-router-dom";
import homeData from "./homeData.json";
import styles from "./Enlaces.module.css";
import qrComponentImg from "../../challanges/qr-Component/assets/images/qrComponentImg.png";
import socialLinksProfileImg from "../../challanges/socialLinksProfile/assets/images/socialLinksProfileImg.png";



const images = {
  qrComponentImg,
  socialLinksProfileImg
};

function Enlaces() {
  const desafio = homeData.desafio;

  const enlaces = desafio.map((data) => (
    <Link className={styles.link} to={data.to}>
      <div className={styles.links__container}>
        <img className={styles.links__img} src={images[data.img]} alt={`Screenshot de ${data.nombre}`} />
        <h2 className={styles.links__title}>{data.nombre}</h2>
      </div>
    </Link>
  ));

  return enlaces;
}

export default Enlaces;
