import AddProduct from "../pages/Admin/AddProduct";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import EditProduct from "../pages/Admin/EditProduct";
import Products from "../pages/Admin/Products";
import Basket from "../pages/User/Basket";
import Home from "../pages/User/Home";
import MainRoot from "../pages/User/MainRoot";
import NotFound from "../pages/User/NotFound";
import ProductDetail from "../pages/User/ProductDetail";
import ProductsUser from "../pages/User/ProductsUser";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'products',
                element: <ProductsUser/>
            },
            {
                path: 'basket',
                element: <Basket/>
            },
            {
                path: 'products/:id',
                element: <ProductDetail/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'add-product',
                element: <AddProduct/>
            },
            {
                path: 'products/edit/:id',
                element: <EditProduct/>
            }
        ]
    }
]