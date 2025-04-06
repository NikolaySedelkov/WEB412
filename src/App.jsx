import { useEffect } from "react";
import { Timer } from "./components/Timer";
import { Game } from "./components/Game";
import { delta } from "./store/timeSlice";
import { useDispatch, useStore } from "react-redux";
import { SwitcherTheme } from "./components/SwitherTheme";

export function App() {
  // dispatch - Функция, которая оправляет событие на отработку к определенному редьюсеру
  const dispatch = useDispatch()

  // не совсем корректно исползовтаь useSelector, хоть и нужны данные, но не нужна подписка на изменения
  // const timestamp = useSelector(state => state.time.timestamp);
  // Если нужны данные из state, но не нужна подписка, есть хук useStore
  const store = useStore();

  useEffect(() => {
    const id = setInterval(() => {
      /*
        if(timestamp < 500) {
          dispatch(delta(0));
          clearInterval(id);
        } else {
          dispatch(delta(-500));
        }
      */
     // Получить состояние
     if(store.getState().time.timestamp < 500) {
        dispatch(delta(0));
        clearInterval(id);
      } else {
        dispatch(delta(-500));
      }
    }, 500);

    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <div>
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
          <SwitcherTheme/>
          <Timer/>
        </header>
        <Game/>
    </div>
  );
}