import { useMemo } from "react";
import { useSelector } from "react-redux"

export function Timer() {
    // useSelector - Достать данные из redux-контекста и подписаться на их изменения
    // useSelector(
    //     fn - определеющая из какой части контекста мы берем данные 
    // )
    const timestamp = useSelector(state => state.time.timestamp);

    const time = useMemo(
        () => new Date(timestamp).toISOString().substr(11, 8),
        [timestamp]
    )

    return (
        <span>
            {time}
        </span>
    )
}