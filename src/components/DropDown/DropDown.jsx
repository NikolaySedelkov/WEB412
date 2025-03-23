import { useState } from 'react';
import styles from './DropDown.module.css';

export function DropDown({label, options}) {
    const [isOpenContent, setStateOpenContent] = useState(false)

    return (
        <div 
            className={styles['container']} 
            onMouseEnter={()=>setStateOpenContent(true)}
            onMouseLeave={()=>setStateOpenContent(false)}
        >
            <div className={styles['trigger']}>
                {label}
            </div>
            { isOpenContent && (
                <ul className={styles['content']}>
                    {
                        options.map(
                            (option, index) => (
                                <li
                                    className={styles['item']} 
                                    key={index}
                                >
                                    {option}
                                </li>
                            )
                        )
                    }
                </ul>
                )
            }
        </div>
    )
}