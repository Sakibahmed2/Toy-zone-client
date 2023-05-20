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
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivetRoutes from "./PrivetRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToy/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";

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
                element: <AllToys></AllToys>
            },
            {
                path: '/toyDetail/:id',
                element: <PrivetRoutes> <ToyDetails></ToyDetails></PrivetRoutes>,
                loader: ({params}) => fetch(`https://toy-zone-assignment.vercel.app/toys/${params.id}`)

            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>,
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/updateToys/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`https://toy-zone-assignment.vercel.app/toys/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;