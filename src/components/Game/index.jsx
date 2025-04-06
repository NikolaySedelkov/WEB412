import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export function Game() {
    return (
        <div style={{
            margin: '0 auto',
            width: '500px',
            height: '500px',
            backgroundColor: 'blueviolet',
            position: 'relative',
        }}>
            <Target widthParent={500} heightParent={500}/>
        </div>
    )
}

export function Target({
    widthParent, 
    heightParent,
}) {
    const timestamp = useSelector(state => state.time.timestamp);

    const [position, setPosition] = useState(() => ({
        left: Math.round(Math.random() * (widthParent - 30)),
        top: Math.round(Math.random() * (heightParent - 30)),
    }));

    const regeneratePosition = () => {
        setPosition(() => ({
            left: Math.round(Math.random() * (widthParent - 30)),
            top: Math.round(Math.random() * (heightParent - 30)),
        }))
    }

    useEffect(() => {
     const id = setInterval(regeneratePosition, 1250);
     return () => 
        clearInterval(id);
     }, [])

    return (
        <div
            style={{
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: '30px',
                height: '30px',
                backgroundColor: timestamp > 5000 ? 'goldenrod' : 'red'
            }}
            onDoubleClick={regeneratePosition}
        
        >
        </div>
    )
}