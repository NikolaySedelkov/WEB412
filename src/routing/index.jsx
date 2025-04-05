import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { List } from "../pages/List";
import { View } from "../pages/View";
import { AddForm } from "../pages/AddForm/AddForm";
import { UpdateForm } from "../pages/UpdateForm";
import { LayoutProduct } from "../components/LayoutProduct";

export function MapRouting() {

    return (
        <Routes>
            <Route
                path="/"
                element={<Layout/>}
            >
                <Route
                    path="product"
                    element={<LayoutProduct/>}
                >
                    <Route
                        path="list"
                        element={<List/>}
                    />

                    <Route
                        path=":id"
                        element={<View/>}
                    />

                    <Route
                        path="create"
                        element={<AddForm/>}
                    />

                    <Route
                        path=":id/update"
                        element={<UpdateForm/>}
                    />
                </Route>
            </Route>
        </Routes>
    )
}
