import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { List } from "../pages/List";
import { useState } from "react";
import { View } from "../pages/View";

export function MapRouting() {
    const [appData, setData] = useState(data)

    const handleDelete = (product) => {
        setData(
            prev => prev.filter(item => item.id !== product.id)
        )
    }

    return (
        <Routes>
            <Route
                path="/"
                element={<Layout/>}
            >
                <Route
                    path="list"
                    element={
                        <List 
                            data={appData}
                            onDelete={handleDelete}
                        />
                    }
                />

                <Route
                    path="product/:id"
                    element={<View data={appData}/>}
                />
            </Route>
        </Routes>
    )
}


const data = [
    {
        "name": "Ноутбук",
        "price": 599.99,
        "category": "Электроника",
        "description": "Мощный ноутбук для работы и развлечений.",
        "id": "d601522fb34d2a4850d24d7d9f00f40673420b1193cd382b2b2e035d78e19172"
    },
    {
        "name": "Смартфон",
        "price": 399.99,
        "category": "Электроника",
        "description": "Современный смартфон с отличной камерой.",
        "id": "8c73ce4fb5884e18a1e03e542c92bd1fb11549015b70e42c4539ecfa7f2815a0"
    },
    {
        "name": "Фитнес-браслет",
        "price": 49.99,
        "category": "Спорт",
        "description": "Удобный браслет для отслеживания активности.",
        "id": "b1526a4fb6b8ea0f5393cad43928f9ef46edf1e200a17262224bcacf7bd6a157"
    },
    {
        "name": "Кофемашина",
        "price": 129.99,
        "category": "Бытовая техника",
        "description": "Качественная кофемашина для дома.",
        "id": "7699dfda754b617bdf9f2a482d406e0a617ae0c88434db53e506eaa648c48154"
    },
    {
        "name": "Наушники",
        "price": 29.99,
        "category": "Электроника",
        "description": "Беспроводные наушники с хорошим звуком.",
        "id": "30b4e18a8a7233afac149725031d5a23e4370407d338ac63658faa34f95d5a1d"
    }
]
