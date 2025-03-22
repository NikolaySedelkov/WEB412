import styles from './App.module.css';

/**
 * SPA - Single Page Aplication - Приложение в одну страницу
 * 
 * React - Создание компонентов - сами компоненты, это функции, которые возвращают определенную разметку, которую нужно подставить на страницу
 * 
 * Самостоятельно взаимодействие с DOM небезопасно и нежелательно!
 * 
 */

const myStyle = { border: "10px solid red" }

export function App() {
  const hours = new Date().getHours();

  const isDay = 6 < hours && hours < 23;

  const theme = styles[`theme-${isDay ? 'day' : 'night'}`]

  return (
    <div className={`${styles["wrapper-full-size"]} ${theme}`} style={myStyle}>

    </div>
  )
}