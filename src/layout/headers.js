import styles from './dashboard.module.css'

export default function headers({ children }) {
    return <div className={styles.headers}>{children}</div>
}