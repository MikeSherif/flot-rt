import React from 'react'
import styles from './Route.module.css'

const Route = (props) => {
  const { route, departure, arrival, duration, status } = props

  return (
    <div className={styles.row}>
      <span className={styles.cell}>{route}</span>
      <span className={styles.cell}>{departure}</span>
      <span className={styles.cell}>{arrival}</span>
      <span className={styles.cell}>{duration}</span>
      <span className={styles.cell}>{status}</span>
    </div>
  )
}

export default Route