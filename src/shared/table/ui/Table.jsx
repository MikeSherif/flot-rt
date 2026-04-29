import React from 'react'
import Route from '@/shared/route/ui/Route'
import styles from './Table.module.css'

const routeData = [
  { id: 1, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 2, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 3, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 4, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 5, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 6, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 7, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 8, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 9, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 10, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
  { id: 11, route: 'Казань-Ключищи', departure: '7:15', arrival: '7:35', duration: '20', status: 'Действует' },
]

const SingleTable = ({ rows }) => {
  return (
    <section className={styles.table}>
      <div className={styles.head}>
        <span className={styles.headCell}>Маршрут</span>
        <span className={styles.headCell}>Отпр-авление</span>
        <span className={styles.headCell}>Прибытие</span>
        <span className={styles.headCell}>В пути</span>
        <span className={styles.headCell}>Статус</span>
      </div>

      {rows.map((item) => (
        <Route
          key={item.id}
          route={item.route}
          departure={item.departure}
          arrival={item.arrival}
          duration={item.duration}
          status={item.status}
        />
      ))}
    </section>
  )
}

const Table = () => {
  return (
    <div className={styles.tables}>
      <SingleTable rows={routeData} />
      <SingleTable rows={routeData} />
    </div>
  )
}

export default Table
