import styles from './Battery.module.css';

/*
 * У компонентов реакт, можно задавать набор атрибутов, которые передаются в функцию, как параметры 
 * 
 * переданные атрибуты в компонент передаются в формате 'пропсов' props
 */

export function Battery(props) {
    if(props.volume < 0 || props.volume > 100) 
        throw new Error("Значение должно быть в интервали от 0 до 100")

    let backgroundColor = null;
    if(props.volume > 90) {
        backgroundColor = 'green';
    } else if(props.volume > 50) {
        backgroundColor = 'yellow';
    } else {
        backgroundColor = 'red';
    }

    return (
        <div className={styles["battery-border"]}>
            <div 
                className={styles["battery-volume"]} 
                style={
                    {width: `${props.volume}%`, backgroundColor}
                }
            >

            </div>
        </div>
    )
}