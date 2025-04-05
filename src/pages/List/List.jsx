import { Link, useNavigate } from 'react-router-dom';
import styles from './List.module.css';
import { useContext } from 'react';
import { ProductContext } from '../../components/LayoutProduct';

export function List() {
    const { data, handleDelete } = useContext(ProductContext);

    return (
        <div className={styles['wrapper']}>
            {
                data.map(
                    item => (
                        <ListItem 
                            key={item.id} 
                            item={item}
                            onDelete={()=>{handleDelete(item)}}
                        />
                    )
                )
            }
            <Link to="/product/create" className={styles['trigger-new']}>
                +
            </Link>
        </div>
    )
}

function ListItem({ item, onDelete }) {
    const navigate = useNavigate()
    return (
        <div className={styles['item']}>
            <div 
                className={styles['description']}
                onDoubleClick={()=>{navigate(`/product/${item.id}`)}}
            >
                <span>{item.name}</span>
                <span>{item.price}$</span>
            </div>
            <button onClick={onDelete}>x</button>
        </div>
    )
}

