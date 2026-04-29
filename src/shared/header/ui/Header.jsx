import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.title}>Регулярные рейсы</h1>
                <p className={styles.date}>Сегодня, 29 апреля</p>
            </div>
            <div className={styles.header__container}>
                <article className={styles.description}>
                    <span className={styles.description__text}>
                        Полное расписание на сайте: флот-рт.рф
                    </span>
                    <span className={styles.description__text}>
                        Справочная информация - 89651213233
                    </span>
                </article>
                <article className={styles.buy}>
                    <span className={styles.buy__text}>
                        Купить онлайн <br></br> на сайте:
                    </span>
                    <span className={styles.buy__text}>
                        флот-рт.рф
                    </span>
                </article>
            </div>
        </header>
    )
}

export default Header