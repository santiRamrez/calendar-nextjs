import styles from './dashboard.module.css'

export default function Dashboard({ children }) {
    return <div className={styles.dashboard}>{children}</div>
}