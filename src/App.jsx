import styles from "./App.module.css"

/**
 * SPA - Single Page Aplication - Приложение в одну страницу
 * 
 * React - Создание компонентов - сами компоненты, это функции, которые возвращают определенную разметку, которую нужно подставить на страницу
 * 
 * Самостоятельно взаимодействие с DOM небезопасно и нежелательно!
 * 
 */

import { Battery } from "./components/Battery";
import { Calculate } from "./components/Calculate/Calculate";
import { Khosting } from "./components/Khosting/Khosting";

const volumies = [5, 21, 19, 55, 1];

export function App() {
  return (
    <>
      <Calculate/>
      <Khosting/>
      <div className={styles["many-batteries"]}>
        {/* Вызов фукнкции Battery с параметром '79' */}
        <Battery volume={79}/>
        <Battery volume={21}/>
        <Battery volume={98}/>
        
        <Battery volume={65}/>
        <Battery volume={1}/>

        {
          // К любому элементу, полученому из map нужно прописать key - уникальный идентификатор для виртуального DOM
          // Уникальный в рамках map
          volumies.map((volume, index) => <Battery key={index} volume={volume}/>)
        }
      </div>
    </>
  )
}