/*
  У любого компонента можно создать 'состояние'

  состояние компонента - это значение компонента(которое относится к нему и только к нему) при изменение которое, вызываются
  функции перерисовки компонента
*/

import { useState } from "react";


export function Clicker() {
  // Создать состояние компонента - специальная функци useState
  /*
    useState(
      initValue = undefine - Начальное значение для состояния
    )
    ->
    [
      Значение текущего состояния,
      функция-сеттер для установки нового значения для состояния
    ]
  */
  const [count, setCount] = useState(0);

  function handleIncClick() {
    // count += 1;
    setCount(count + 1);

    /*
      Изменения состояния через старое, работает в формате того, что 
      принимает callback в которой будет проброшено предидущее состояние и функция должно будет вернуть значение нового

      setCount(prev => prev + 1)
    */
  }

  function handleDecClick() {
    // count -= 1;
    /**
     *  if(count >= 1) {
     *    setCount(count - 1);
     *  }
     */
    setCount(prev => prev >= 1 ? prev - 1 : prev)
  }

  return (
    <>
      <p>Счетчик: {count}</p>
      <button onClick={handleIncClick}>+1</button>    
      <button onClick={handleDecClick}>-1</button>  
      <button onClick={() => setCount(0)}>reset</button>  
    </>
  )
}