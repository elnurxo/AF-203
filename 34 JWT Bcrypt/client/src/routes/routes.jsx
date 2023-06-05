import Home from "../pages/Home";
import Login from "../pages/Login";
import MainRoot from "../pages/MainRoot";
import Register from "../pages/Register";
import Users from "../pages/Users";


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
                path: 'users',
                element: <Users/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]