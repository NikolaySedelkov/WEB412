import { useContext } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../components/LayoutProduct";

function AddFormContent(
    {
        defaultValues,
        onCreate
    }
) {
    const navigate = useNavigate();

    const [data, setData] = useState(defaultValues);
    const handleChange = ({target}) => {
        setData(
            prev => ({
                ...prev,
                [target.name]: target.value
            })
        )
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onCreate(data);
            navigate('/product/list');
        }}>
            <table>
                <tbody>
                <tr>
                    <td>Имя</td>
                    <td>
                        <input name="name" value={data.name} onChange={handleChange} required/>
                    </td>
                </tr>

                <tr>
                    <td>Категория</td>
                    <td>
                        <input name="category" value={data.category} onChange={handleChange} required/>
                    </td>
                </tr>

                <tr>
                    <td>description</td>
                    <td>
                        <textarea name="description" value={data.description} onChange={handleChange} required></textarea>
                    </td>
                </tr>

                <tr>
                    <td>price</td>
                    <td>
                        <input name="price" type="number" min="1" value={data.price} onChange={handleChange} required/>
                    </td>
                </tr>
                </tbody>
            </table>
            <button>Сохранение</button>
        </form>
    )
}

export function AddForm( {
    defaultValues = {
        name: '',
        description: '',
        category: '',
        price: 1,
    }}
) {
    const { handleCreate } = useContext(ProductContext);
    return (
        <AddFormContent
            defaultValues={defaultValues}
            onCreate={handleCreate}
        />
    )
}