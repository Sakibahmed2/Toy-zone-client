import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-zone.vercel.app/toys')
            }
        ]
    },
]);

export default router;