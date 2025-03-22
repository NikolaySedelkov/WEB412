import PropTypes from 'prop-types';

import styles from "./Khosting.module.css";

// '..' - Перейти на папку выше 

import host1 from "../../assets/host-1.png";
import host2 from "../../assets/host-2.png";
import host3 from "../../assets/host-3.png";

export function Khosting() {
    return (
        <div className={styles['Khosting-container']}>
            <HostingItem
                price={{
                    amount: 3.95,
                    symbol: '$',
                }}
                title="Виртуальный хостинг"
                linkUrl="#"
                imgUrl={host1}
            />
            <HostingItem
                price={{
                    amount: 68.95,
                    symbol: '$',
                }}
                title="Облачный хостинг"
                linkUrl="#"
                imgUrl={host2}
            />
            <HostingItem
                price={{
                    amount: 168.95,
                    symbol: '$',
                }}
                title="выделенный сервер"
                linkUrl="#"
                imgUrl={host3}
            />
        </div>
    )
}

function HostingItem({price, title, linkUrl, imgUrl}) {
    return (
        <div className={styles["HostingItem-container"]}>
            <img src={imgUrl} className={styles["HostingItem-img"]}/>
            <h3>{title}</h3>
            {/* Обработка состояния того, отображать ли цену */}
            {
                price && (
                    <span>{price.amount}{price.symbol} в месяц</span>
                )
            }
            
            <a 
                href={linkUrl} 
                className={styles["HostingItem-link"]}
            >
                Подробнее
            </a>
        </div>
    )
}

HostingItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        symbol: PropTypes.string.isRequired
    })
}