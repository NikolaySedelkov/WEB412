import { createContext, useEffect, useState } from "react";
import { Timer } from "./components/Timer";
import { Game } from "./components/Game";

export function App() {
  const [timestapm, setTimestamp] = useState(7000);

  useEffect(() => {
    const id = setInterval(() => {
      setTimestamp(prev => {
        if(prev < 500) {
          clearInterval(id);
          return 0;
        } else {
          return prev - 500
        }
      });
    }, 500);


    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <div>
      <TimeContext.Provider
        value={timestapm}
      >
        <header style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Timer timestamp={timestapm}/>
        </header>
        <Game/>
      </TimeContext.Provider>
    </div>
  );
}


export const TimeContext = createContext();