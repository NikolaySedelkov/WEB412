import { Outlet } from "react-router-dom";
import { ProductProvider } from "./ProductContext";

export function LayoutProduct() {
    return (
        <ProductProvider>
            <Outlet/>
        </ProductProvider>
    )
}