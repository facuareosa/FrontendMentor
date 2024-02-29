import React from "react";
import { Link } from "react-router-dom";
import homeData from "./homeData.json";
import styles from "./Enlaces.module.css";
import qrComponentImg from "../../challanges/qr-Component/assets/images/qrComponentImg.png";
import socialLinksProfileImg from "../../challanges/socialLinksProfile/assets/images/socialLinksProfileImg.png";
import menuAcordeonImg from "../../challanges/menu-acordeon/assets/images/menuAcordeonImg.png";
import ratingComponentImg from "../../challanges/rating-component/assets/images/ratingComponentImg.png";
import todoAppImg from "../../challanges/todo-component/assets/images/todoAppImg.png"



const images = {
  qrComponentImg,
  socialLinksProfileImg,
  menuAcordeonImg,
  ratingComponentImg,
  todoAppImg
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
