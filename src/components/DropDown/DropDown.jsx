import { useState } from 'react';
import styles from './DropDown.module.css';

// children - это пропс, который добавляется в компонент в случае если он используется как родительский элемент DOM
export function DropDown({Trigger, children}) {
    const [isOpenContent, setStateOpenContent] = useState(false)

    return (
        <div 
            className={styles['container']} 
            onMouseEnter={()=>setStateOpenContent(true)}
            onMouseLeave={()=>setStateOpenContent(false)}
        >
            <div className={styles['trigger']}>
                {Trigger}
            </div>
            { isOpenContent && (
                <div className={styles['content']}>
                    { children }
                </div>
            ) }
        </div>
    )
}