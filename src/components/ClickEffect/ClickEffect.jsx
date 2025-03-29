import { useEffect, useState } from "react";

// Хуки - Специальные функции, которые позволяют вторгаться в жизненный цикл компонента, ТОЛЬКО ВНУТРИ ФУНКЦИОНАЛЬНЫХ КОМПОНЕНТОВ
export function ClickEffect() {
    const [prevColor, setPrevColor] = useState()

    function updateColor() {
        setPrevColor(document.body.style.backgroundColor);
        document.body.style.backgroundColor = 'yellow';
    }

    function resetColot() {
        document.body.style.backgroundColor = prevColor;
    }

    // Мы можем реагировать на этапы монтирования и размонтирования компонента
    // useEffect - Хук, позволяющий написать обработчики событий для монтирования и размонтирования 

    /**
     * useEffet(
     *  cf - Обработчий событий монтирования, который возвращает 
     *              обработчик события размонтирования
     *  deps - Массив триггеров вызова этих событий
     * )
     */

    useEffect(
        () => {
            window.addEventListener('mouseup', resetColot)

            return () => {
                window.removeEventListener('mouseup', resetColot)
            }
        }, 
        [prevColor]
    )
    

    return (
        <button
            onMouseDown={updateColor}
        >
            Для того, чтобы изменить цвет зажмите кнопку
        </button>
    )
}