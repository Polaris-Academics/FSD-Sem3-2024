import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:'products',element:<Products/>},
            {path:'products/:id',element:<ProductDetails/>},
        ]
    }

]
)
