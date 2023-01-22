import styles from './sidebar.module.css'

export default function Stack({ children }) {
    return <div className={styles.stack}>{children}</div>
}