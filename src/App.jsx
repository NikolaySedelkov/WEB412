import styles from './App.module.css';
import { ButtonPageUp } from './ButtonPageUp';

export function App() {
  return (
    <>
      <div className={styles["grid-window-logo"]}>
        <div className={styles["green"]}/>
        <div className={styles["yellow"]}/>
        <div className={styles["blue"]}/>
        <div className={styles["red"]}/>
      </div>
      <ButtonPageUp/>
    </>
  )
}