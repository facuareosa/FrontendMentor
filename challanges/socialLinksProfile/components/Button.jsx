import React from 'react'
import styles from './Button.module.css'

function Button({datos}) {
    
  return (
    <>
    <a className={styles.app__a} href={datos.link}>
        {datos.nombre}
    </a>
    </>
  )
}

export default Button