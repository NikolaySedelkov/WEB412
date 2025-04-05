import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './View.module.css';
import { useContext } from "react";
import { ProductContext } from "../../components/LayoutProduct";

export function View() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {data} = useContext(ProductContext)

    const item = data.find(item => item.id === id);

    if(item) {
        return (
            <div>
                <div className={styles['actions']}>
                    <span onClick={()=>{navigate(-1)}}>Назад</span>
                    <Link to='update'>Редактировать</Link>
                </div>
                <h3>{item.category}</h3>
                <h2>{item.name}</h2>
                <p><b>{item.price}$</b></p>
                <p>{item.description}</p>
            </div>
        )
    }

    return <h1>Ошибка</h1>
}