import { useParams } from "react-router-dom";

export function View({ data }) {
    const { id } = useParams();

    const item = data.find(item => item.id === id);

    if(item) {
        return (
            <h1>{item.name}</h1>
        )
    }

    return <h1>Ошибка</h1>
}