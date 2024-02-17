import React from 'react'
import Enlaces from './Enlaces'
import styles from "./Home.module.css"

function Home() {
  
  return (
    <>
        <main className={styles.main}>
          <section className={styles.introduction}>
            <h1 className={styles.introduction__title}><span>&lt;</span> FacuDev <span>&gt;</span></h1>
            <h2 className={styles.introduction__subtitle}>Frontend Mentor Challanges</h2> 
            <p className={styles.introduction__p}>La idea de esta web nace de facilitar el acceso tanto visual como de codigo de mis resoluciones de los desaios de la pagina <a href='https://www.frontendmentor.io/'>frontendmentor.io</a></p>
          </section>
          <section className={styles.links}>
           <Enlaces />
          </section>
        </main>
    </>
  )
}

export default Home