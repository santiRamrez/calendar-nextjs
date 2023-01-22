import styles from './sidebar.module.css'

export default function Profile({ children }) {
    return <div className={styles.profile}>{children}</div>
}