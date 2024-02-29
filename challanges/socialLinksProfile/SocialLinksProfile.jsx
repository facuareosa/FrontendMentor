import React from "react";
import RedesData from "./data/data.json";
import Button from "./components/Button";
import styles from "./SocialLinksProfile.module.css";
import profileImg from "./assets/images/Facu-perfilSquare.jpg";
import ToHomeBtn from "../../pages/home/ToHomeBtn";

function SocialLinksProfile() {
  const redes = RedesData.redes;
  const buttonRender = () => {
    return redes.map((datos, index) => <Button key={index} datos={datos} />);
  };
  return (
      <div className={styles.app}>
        <div className={styles.app__container}>
          <div className={styles.app__headerContainer}>
            <img
              className={styles.app__img}
              src={profileImg}
              alt="imagen de perfil"
            />
            <h1 className={styles.app__title}>Facundo Areosa</h1>
            <h2 className={styles.app__subtitle}>Palma, España</h2>
            <p className={styles.app__text}>"Front-end Developer"</p>
          </div>
          <div className={styles.app__btnContainer}>{buttonRender()}</div>
        </div>
        <ToHomeBtn />
      </div>
  );
}

export default SocialLinksProfile;
