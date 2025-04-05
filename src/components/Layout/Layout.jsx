import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['content-container']}>
                <Outlet/>
            </div>
        </div>
    )
}