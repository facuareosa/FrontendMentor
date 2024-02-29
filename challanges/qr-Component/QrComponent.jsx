import React from 'react'
import qrImg from './assets/images/image-qr-code.png'
import styles from './QrComponent.module.css'
import ToHomeBtn from '../../pages/home/ToHomeBtn'

function QrComponent() {
  return (
    <div className={styles.app}>
     <div className={styles.app__container}>
      <img className={styles.app__img} src={qrImg} alt="image-qr-code"/>
      <div className={styles.app__textContainer}>
        <h2 className={styles.app__title}>Improve your front-end skills by building projects</h2>
        <p className={styles.app__text}>Scan the QR code to vist Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
    <ToHomeBtn />
  </div>
  )
}

export default QrComponent