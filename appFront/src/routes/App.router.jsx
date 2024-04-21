import {Navigate, Route, Routes} from "react-router-dom";
import {CreateArticle} from "../components/form-product/form-product.jsx";
import {ListProducts} from "../pages/list-page/list-products.jsx";

export const  AppRouter = () => {
    return(
        <>
            <Routes>
                <Route element={<CreateArticle/>} path="createProducts"/>
                <Route element={<ListProducts/>} path="products"/>
                <Route path="/*" element={<Navigate to="products"/>} />
            </Routes>
        </>
    )
}