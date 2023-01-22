import styles from './dashboard.module.css'

export default function Calendar({ children }) {
    return <div className={styles.calendar}>{children}</div>
}