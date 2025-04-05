import { useNavigate } from 'react-router-dom';
import styles from './List.module.css';

export function List({data, onDelete}) {
    return (
        <div className={styles['wrapper']}>
            {
                data.map(
                    item => (
                        <ListItem 
                            key={item.id} 
                            item={item}
                            onDelete={()=>{onDelete(item)}}
                        />
                    )
                )
            }
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

