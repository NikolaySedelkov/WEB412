import { useParams } from "react-router-dom";
import { AddForm } from "../AddForm/AddForm";
import { useContext } from "react";
import { ProductContext } from "../../components/LayoutProduct";

export function UpdateForm() {
    const { id } = useParams();

    const { data, handleUpdate } = useContext(ProductContext)

    const item = data.find(item => item.id === id);

    if(item) {
        return (
            <AddForm
                defaultValues={item}
                onCreate={handleUpdate}
            />
        )
    }

    return <h1>Ошибка</h1>
}